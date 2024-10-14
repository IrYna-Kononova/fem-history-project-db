import { Schema, model } from "mongoose";

const resourceSchema = new Schema({
  title: String,
  author: String,
  description: String,
  link: String,
});

export default model("Resource", resourceSchema);
