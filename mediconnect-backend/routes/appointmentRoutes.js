import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.json(appointment);
});

router.get("/doctor/:doctorId", async (req, res) => {
  const appointments = await Appointment.find({
    doctorId: req.params.doctorId,
  });
  res.json(appointments);
});

router.delete("/:id", async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: "Done" });
});

export default router;
