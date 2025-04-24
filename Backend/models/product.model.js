import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    video: {
      type: String,
    },
    kinbox: {
      type: String,
    },
    wholesalePrice: {
      type: Number,
    },
    wholesaleMinQuantity: {
      type: Number,
    },
    categories: {
      type: Array,
    },
    concern: {
      type: Array,
    },
    brand: {
      type: String,
    },
    skintype: {
      type: Array,
    },
    originalPrice: {
      type: Number,
    },
    discount: {
      // type: Number,
    },
    stock: {
      type: Boolean,
      default: true,
    },
    ratings: [
      {
        star: { type: String },
        name: { type: String },
        comment: { type: String },
        postedBy: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

productSchema.index({ "$**": "text" });

const Product = mongoose.model("Product", productSchema);
export default Product;
