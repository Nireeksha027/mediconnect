import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

export default mongoose.model("Patient", patientSchema);
