import express from "express";
const router = express.Router();
import {createBanner, deleteBanner, getAllBanners, getBanner} from "../controller/banner.controller.js";

//CREATE BANNER ROUTE
router.post("/", createBanner);

//DELETE BANNER ROUTE
router.delete("/:id", deleteBanner);

//GET ALL BANNERS ROUTE
router.get("/", getAllBanners);

//GET A BANNER ROUTE
router.get("/random", getBanner);

export default router;
