import express from "express";
import {updateUser, deleteUser, getUser, getAllUsers} from "../controller/user.controller.js";

const router = express.Router();

//GET ALL USERS ROUTE
router.get ("/", getAllUsers);

//DELETE USER ROUTE
router.delete ("/:id", deleteUser);

//GET A USER ROUTE
router.get ("/find/:userId", getUser);

//UPDATE USER ROUTE
router.put ("/:id", updateUser);

export default router;