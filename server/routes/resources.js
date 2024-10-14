import express from "express";
const router = express.Router();
import Resource from "../models/Resource.js";

//GET all resources
router.get("/", async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
