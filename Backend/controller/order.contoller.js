import Order from "../models/order.model.js";
import asyncHandler from "express-async-handler";

//CREATE ORDER
const createOrder = asyncHandler(async (req, res) => {
  const newOrder = Order(req.body);
  const savedOrder = await newOrder.save();
  if (!savedOrder) {
    res.status(400);
    throw new Error("Order not created");
  } else {
    res.status(200).json(savedOrder);
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

  if (!updateOrder) {
    res.status(400);
    throw new Error("Order not updated");
  } else {
    res.status(200).json(updateOrder);
  }
});

//DELETE ORDER
const deleteOrder= asyncHandler(async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);

    if(!order){
        res.status(400);
        throw new Error("Order not deleted");
}else{
    res.status(200).json("order deleted successfully");
}
});

//GET USER ORDERS
const getUserOrder = asyncHandler(async (req, res) => {
    const orders = (await Order.find({userId: req.params.id})).reverse();
    if(!orders){
        res.status(400);
        throw new Error("Orders not found");
    }else{
        res.status(200).json(orders);
    }

});

//GET ALL ORDERS
const getAllOrders = asyncHandler(async (req, res) => {
    const orders = (await Order.find()).reverse();
    if(!orders){
        res.status(400);
        throw new Error("Orders not found");
    }else{
        res.status(200).json(orders);
    }   

});

export { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders };