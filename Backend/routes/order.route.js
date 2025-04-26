import express from "express";
const router = express.Router();

import {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAllOrders,
  initiateEsewaPayment,
  verifyEsewaPayment,
} from "../controller/order.contoller.js";
import protect from "../Middleware/auth.middleware.js";

//CREATE ORDER ROUTE
router.post("/", createOrder);

//INITIATE ESEWA PAYMENT ROUTE
router.post("/initiate/esewa/payment", initiateEsewaPayment); 

//VERIFY ESEWA PAYMENT ROUTE
router.get("/verify/esewa/payment", verifyEsewaPayment); 

//UPDATE ORDER ROUTE
router.put("/:id", updateOrder);

//DELETE ORDER ROUTE
router.delete("/:id", deleteOrder);

//GET USER ORDERS ROUTE
router.get("/find/:id", getUserOrder);

//GET ALL ORDERS
router.get("/", getAllOrders);

export default router;