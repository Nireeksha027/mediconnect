import express from "express";
import Patient from "../models/Patient.js";

const router = express.Router();

// Register patient
router.post("/register", async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.json(patient);
});

// Patient login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const patient = await Patient.findOne({ email, password });

  if (!patient) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ patient });
});

export default router;
