import express from "express";
const router = express.Router();
import Event from "../models/Event.js";

//GET all events
router.get("/", async (req, res) => {
  try {
    const { era, region, type } = req.query;
    const filter = {};

    if (era) filter.era = era;
    if (region) filter.region = region;
    if (type) filter.type = type;

    const events = await Event.find(filter);
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//POST a new event (optional for future features)
router.post("/", async (req, res) => {
  const event = new Event(req.body);
  try {
    const saveEvent = await event.save();
    res.json(saveEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
