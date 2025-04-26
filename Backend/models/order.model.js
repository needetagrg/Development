import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    status: {
      type: Number,
      default: 0, // 0: Pending, 1: Processing, 2: Delivered, 3: Completed, 4: Cancelled
    },
    paymentMethod: {
      type: String,
      default: "eSewa", // Set default to eSewa since that's our focus
    },
    transactionId: {
      type: String, // eSewa transaction ID
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;