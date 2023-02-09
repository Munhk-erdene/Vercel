import mongoose from "mongoose";
import bcrypt from "bcrypt";
const dataSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    mail: {
      required: [true, "email esvl passa hi"],
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["normal", "admin"],
      default: "normal",
      required: [true],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

dataSchema.virtual("link", {
  ref: "Link",
  localField: "_id",
  foreignField: "user_id",
});
dataSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});
dataSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
const Data = mongoose.model("Data", dataSchema);
export default Data;
