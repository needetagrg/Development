import Order from "../models/order.model.js";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";
import crypto from 'crypto';

dotenv.config();

//CREATE ORDER
const createOrder = asyncHandler(async (req, res) => {
  const newOrder = new Order({
    userId: req.body.userId,
    name: req.body.name,
    email: req.body.email,
    products: req.body.cart.products,
    total: req.body.cart.total,
    address: req.body.address, // You might need to send this from the frontend
    phone: req.body.phone,     // You might need to send this from the frontend
  });
  const savedOrder = await newOrder.save();
  if (!savedOrder) {
    res.status(400);
    throw new Error("Order not created");
  } else {
    res.status(200).json(savedOrder);
  }
});

const initiateEsewaPayment = asyncHandler(async (req, res) => {
  const { cart, userId, email, name, address, phone } = req.body;

  // 1. Create a new order
  const newOrder = new Order({
    userId,
    name,
    email,
    products: cart.products,
    total: cart.total, // Include shipping
    paymentMethod: "eSewa",
    status: 0,
    address,
    phone,
    isPaid: false,
    paidAt: null,
  });

  const savedOrder = await newOrder.save();

  if (!savedOrder) {
    res.status(400);
    throw new Error("Order creation failed during eSewa initiation");
  }

  // 2. Setup payment details
  const merchantId = "EPAYTEST"; // Use production key for live
  const secretKey = "8gBm/:&EnhH.1/q"; // Use your actual secret key
  const amount = cart.total;
  const deliveryCharge = 200;
  const totalAmount = amount + deliveryCharge;
  const transactionUUID = savedOrder._id.toString();
  const successUrl = `${req.protocol}://${req.get("host")}/api/v1/verify/esewa/payment`;
  const failureUrl = `${req.protocol}://${req.get("host")}/order/failure`;

  // 3. Create payload to sign
  const payloadToSign = {
    total_amount: totalAmount.toFixed(2),
    transaction_uuid: transactionUUID,
    product_code: merchantId,
  };

  const signatureString = `${totalAmount.toFixed(2)},${transactionUUID},${merchantId}`;

  const signature = crypto
    .createHmac("sha256", secretKey)
    .update(signatureString)
    .digest("base64");

  // 4. FormData to send to frontend
  const formData = {
    total_amount: totalAmount.toFixed(2),
    transaction_uuid: transactionUUID,
    product_code: merchantId,
    success_url: successUrl,
    failure_url: failureUrl,
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature,
  };

  // 5. Send to client for submission
  res.status(200).json({ formData });
});


//VERIFY ESEWA PAYMENT
const verifyEsewaPayment = asyncHandler(async (req, res) => {
  const { oid, amt, refId } = req.query;
  const merchantId = "EPAYTEST"; // Use your actual merchant ID in production

  if (!oid || !amt || !refId) {
    return res.status(400).send("Missing required verification parameters.");
  }

  try {
    const verificationUrl = "https://uat.esewa.com.np/api/epay/transaction/status/";
    const verificationPayload = {
      transaction_uuid: oid,
      product_code: merchantId,
      total_amount: amt,
    };

    const response = await axios.post(verificationUrl, verificationPayload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const status = response?.data?.status;

    if (status === "COMPLETE") {
      const order = await Order.findByIdAndUpdate(
        oid,
        {
          isPaid: true,
          paidAt: new Date(),
          transactionId: refId,
          status: 1,
        },
        { new: true }
      );

      if (order) {
        return res.redirect(`/order/success?orderId=${oid}`);
      } else {
        return res.status(404).send("Order not found.");
      }
    } else {
      await Order.findByIdAndUpdate(
        oid,
        { status: 4 },
        { new: true }
      );
      return res.redirect(`/order/failure?orderId=${oid}`);
    }
  } catch (error) {
    console.error("Error verifying eSewa payment:", error.message);
    return res.status(500).send("Verification failed. Please try again.");
  }
});

//UPDATE ORDER
const updateOrder = asyncHandler(async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );

  if (!updatedOrder) {
    res.status(400);
    throw new Error("Order not updated");
  } else {
    res.status(201).json(updatedOrder);
  }
});

//DELETE ORDER
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);

  if (!order) {
    res.status(400);
    throw new Error("Order not deleted");
  } else {
    res.status(200).json("order deleted successfully");
  }
});

//GET USER ORDERS
const getUserOrder = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.params.id }).exec();
  if (!orders || orders.length === 0) {
    res.status(404);
    throw new Error("Orders not found");
  } else {
    res.status(200).json(orders.reverse());
  }
});

//GET ALL ORDERS
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = (await Order.find()).reverse();
  if (!orders) {
    res.status(400);
    throw new Error("Orders not found");
  } else {
    res.status(200).json(orders);
  }
});

export { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders, initiateEsewaPayment, verifyEsewaPayment };