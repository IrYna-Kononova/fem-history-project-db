import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDB } from "./libs/database.js";

import eventsRouter from "./routes/events.js";
import mythsRouter from "./routes/myths.js";
import resourcesRouter from "./routes/resources.js";

dotenv.config();
console.log(process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || 8000;

await connectToDB();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventsRouter);
app.use("/api/myths", mythsRouter);
app.use("/api/resources", resourcesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
