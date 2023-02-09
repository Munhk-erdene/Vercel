import mongoose, { Schema } from "mongoose";
import { nanoid } from "nanoid";
const linkSchema = new mongoose.Schema({
  longLink: {
    required: [true, "link ee oruulna uu"],
    type: String,
  },
  shortLink: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "Data",
    required: [true],
  },
});

const Link = mongoose.model("Link", linkSchema);
export default Link;
