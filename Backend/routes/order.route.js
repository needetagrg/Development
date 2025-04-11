import express from "express";  
const router = express.Router();

import { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders } from "../controller/order.contoller.js";
import protect from "../Middleware/auth.middleware.js";


//CREATE ORDER ROUTE
router.post("/", createOrder);

//UPDATE ORDER ROUTE
router.put("/:id", updateOrder);

//DELETE ORDER ROUTE
router.delete("/:id", deleteOrder);

//GET USER ORDERS ROUTE
router.get("/find/:userId", getUserOrder);

//GET ALL ORDERS 
router.get("/", protect, getAllOrders);

export default router;