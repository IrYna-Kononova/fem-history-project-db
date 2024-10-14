import { Schema, model } from "mongoose";

const mythSchema = new Schema({
  myth: String,
  debunk: String,
});

export default model("Myth", mythSchema);
