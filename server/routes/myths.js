import express from "express";
const router = express.Router();
import Myth from "../models/Myth.js";

//GET all myths
router.get("/", async (req, res) => {
  try {
    const myths = await Myth.find();
    res.json(myths);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
