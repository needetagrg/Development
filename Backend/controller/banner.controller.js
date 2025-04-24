import Banner from "../models/banner.model.js";
import asyncHandler from "express-async-handler";

//CREATE BANNER
const createBanner = asyncHandler(async (req, res) => {
  const newBanner = Banner(req.body);
  const savedBanner = newBanner.save();

  if (!savedBanner) {
    res.status(400);
    throw new Error("Banner not created");
  } else {
    res.status(200).json(savedBanner);
  }
});

//DELETE BANNER
const deleteBanner = asyncHandler(async (req, res) => {
  const banner = await Banner.findByIdAndDelete(req.params.id);
  if (!banner) {
    res.status(400);
    throw new Error("Banner not found");
  } else {
    res.status(201).json("Banner deleted successfully");
  }
});

//GET ALL BANNERS
const getAllBanners = asyncHandler(async (req, res) => {
  const banners = await Banner.find();

  if (!banners) {
    res.status(400);
    throw new Error("No banners found");
  } else {
    res.status(200).json(banners);
  }
});



//GET A BANNER
const getBanner = asyncHandler(async (req, res) => {
  const banners = await Banner.find();
  if (!banners || banners.length === 0) {
    res.status(400);
    throw new Error("No banners found");
  } else {
    const randomIndex = Math.floor(Math.random() * banners.length);
    const randomBanner = banners[randomIndex];
    res.status(200).json(randomBanner);
  }
});





export { createBanner, deleteBanner, getAllBanners, getBanner };
