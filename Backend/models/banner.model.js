import mongoose from "mongoose";
const bannerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    subtitle: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Banner = mongoose.model("Banner", bannerSchema);
export default Banner;
