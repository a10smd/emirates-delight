import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    // fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
    },
    dob: { type: Date, required: true },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = models?.User || mongoose.model("User", UserSchema);
