import express from "express";
import Doctor from "../models/Doctor.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

router.post("/", async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  res.json(doctor);
});

router.delete("/:id", async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ message: "Doctor deleted" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const doctor = await Doctor.findOne({ email, password });
  if (!doctor) return res.status(401).json({ message: "Invalid" });
  res.json({ doctor });
});

export default router;
