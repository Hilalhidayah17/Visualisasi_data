import express from "express";
import user from "../model/user.js";

const router = express.Router();

router.get("/get-summary", async (req, res) => {
  const limit = parseInt(req.query.limit || 50);
  const page = parseInt(req.query.page || 1);
  const skipPage = (page - 1) * limit;

  try {
    const userData = await user.find().skip(skipPage).limit(limit);
    const totalPage = Math.ceil((await user.countDocuments()) / limit);
    res.json({ userData, totalPage });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
});

router.get("/get-summary/gender", async (req, res) => {
  try {
    const genderCounts = await user.aggregate([
      { $group: { _id: "$gender", count: { $sum: 1 } } },
    ]);
    res.json({
      data: genderCounts.map((g) => ({ gender: g._id, count: g.count })),
    });
  } catch (error) {
    res.status(500).json({ message: "Error generating gender summary", error });
  }
});

router.get("/get-summary/device", async (req, res) => {
  try {
    const topDevices = await user.aggregate([
      { $group: { _id: "$brandDevice", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]);
    res.json({
      data: topDevices.map((d) => ({ brand: d._id, count: d.count })),
    });
  } catch (error) {
    res.status(500).json({ message: "Error generating device summary", error });
  }
});

router.get("/get-summary/location", async (req, res) => {
  try {
    const locationData = await user.aggregate([
      { $group: { _id: "$locationType", count: { $sum: 1 } } },
    ]);
    res.json({
      data: locationData.map((loc) => ({
        location: loc._id,
        count: loc.count,
      })),
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error generating location summary", error });
  }
});

router.get("/get-summary/login-hour", async (req, res) => {
  try {
    const hourData = await user.aggregate([
      { $group: { _id: "$loginHour", count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]);
    res.json({ data: hourData.map((h) => ({ hour: h._id, count: h.count })) });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error generating login hour summary", error });
  }
});

export default router;
