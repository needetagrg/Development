import Order from "../models/order.model.js";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";
import crypto from 'crypto';
import axios from "axios";

dotenv.config();

//CREATE ORDER
const createOrder = asyncHandler(async (req, res) => {
  const newOrder = new Order({
    userId: req.body.userId,
    name: req.body.name,
    email: req.body.email,
    products: req.body.cart.products,
    total: req.body.cart.total,
    address: req.body.address, 
    phone: req.body.phone,     
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
    total: cart.total,
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

  // Setup payment details
  const merchantId = "EPAYTEST"; 
  const secretKey = "8gBm/:&EnhH.1/q"; 
  const amount = cart.total;
  const deliveryCharge = 200;
  const totalAmount = amount + deliveryCharge;
  const transactionUUID = savedOrder._id.toString();
  const successUrl = `${req.protocol}://${req.get("host")}/api/v1/orders/verify/esewa/payment`; 
  const failureUrl = `http://localhost:5173/order/failure`;

  // Create payload to sign
  const signatureString = `total_amount=${totalAmount.toFixed(2)},transaction_uuid=${transactionUUID},product_code=${merchantId}`;
  console.log('Signature String:', signatureString); // Debug log

  const signature = crypto
    .createHmac("sha256", secretKey)
    .update(signatureString)
    .digest("base64");

  // 4. FormData to send to frontend
  const formData = {
    amount: amount.toFixed(2), 
    tax_amount: "0.00", 
    total_amount: totalAmount.toFixed(2),
    transaction_uuid: transactionUUID,
    product_code: merchantId,
    product_service_charge: "0.00", // Add if required
    product_delivery_charge: deliveryCharge.toFixed(2), 
    success_url: successUrl,
    failure_url: failureUrl,
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature,
  };

  // 5. Send to client for submission
  res.status(200).json({ formData });
});


const verifyEsewaPayment = asyncHandler(async (req, res) => {
  const { data } = req.query;

  if (!data) {
    return res.status(400).send("Missing data parameter.");
  }

  try {
    // Decode Base64-encoded data
    const decodedData = JSON.parse(Buffer.from(data, "base64").toString("utf-8"));
    const {
      transaction_code,
      status,
      total_amount,
      transaction_uuid,
      product_code,
    } = decodedData;

    // Verify required fields
    if (!transaction_uuid || !total_amount || !transaction_code || !status || !product_code) {
      return res.status(400).send("Invalid data parameters.");
    }

    // Normalize total_amount for validation
    const normalizedTotalAmount = parseFloat(total_amount.replace(/,/g, "")).toFixed(2);

    // Log for debugging
    console.log("Decoded eSewa Data:", decodedData);
    console.log("Normalized Total Amount:", normalizedTotalAmount);

    // Validate total_amount against order
    const order = await Order.findById(transaction_uuid);
    if (!order) {
      return res.status(404).send("Order not found.");
    }
    if (parseFloat(normalizedTotalAmount) !== order.total + 200) {
      return res.status(400).send("Amount mismatch.");
    }

    // Frontend base URL from environment variable
    const frontendBaseUrl = "http://localhost:5173";

    // Check payment status
    if (status === "COMPLETE") {
      const updatedOrder = await Order.findByIdAndUpdate(
        transaction_uuid,
        {
          isPaid: true,
          paidAt: new Date(),
          transactionId: transaction_code,
          status: 1,
        },
        { new: true }
      );

      if (updatedOrder) {
        console.log("Order Updated:", updatedOrder);
        return res.redirect(`${frontendBaseUrl}/order?orderId=${transaction_uuid}`);

      } else {
        return res.status(404).send("Order not found.");
      }
    } else {
      await Order.findByIdAndUpdate(
        transaction_uuid,
        { status: 4 },
        { new: true }
      );
      console.log("Payment Failed, Status:", status);
      return res.redirect(`${frontendBaseUrl}/order/failure?orderId=${transaction_uuid}`);
    }
  } catch (error) {
    console.error("Error verifying eSewa payment:", error.message, error.stack);
    return res.status(500).send(`Verification failed: ${error.message}`);
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