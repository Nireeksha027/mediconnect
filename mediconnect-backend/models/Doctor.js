import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  specialization: String
});

export default mongoose.model("Doctor", doctorSchema);
