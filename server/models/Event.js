import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  year: String,
  title: String,
  description: String,
  era: String,
  region: String,
  type: String,
});

export default model("Event", eventSchema);
