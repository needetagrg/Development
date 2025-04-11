import mongoose from "mongoose";
import bycrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    status: {
      type: Number,
      require: 0,
    },
  },
  {
    timestamps: true,
  }
);

//saving user to the DB
userSchema.pre("save",async function(next) {
    if (!this.isModified("password")) {
        next();
    }
    //encryption here
    const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password, salt);
    next();
    
});

//checking if the password is correct
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bycrypt.compare(enteredPassword, this.password);
}


const User = mongoose.model("User", userSchema);
export default User;
