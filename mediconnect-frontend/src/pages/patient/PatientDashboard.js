import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PatientDashboard() {
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const navigate = useNavigate();


  // fetch doctors
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/doctors")
      .then((res) => setDoctors(res.data));
  }, []);

  const bookAppointment = async () => {
    const selectedDoctor = doctors.find((d) => d._id === doctorId);

    await axios.post("http://localhost:5001/api/appointments", {
      patientName: localStorage.getItem("patientName"), // ✅ FIX
      doctorId: selectedDoctor._id,
      doctorName: selectedDoctor.name, // ✅ FIX
      date,
      reason,
    });

    alert("Appointment booked successfully");
    setDate("");
    setReason("");
  };

  return (
    <div className="center">
      <div className="card wide-card">
        <button className="back-btn" onClick={() => navigate(-1)}>
  ← Back
</button>

        <h2>Book Appointment</h2>

        <select onChange={(e) => setDoctorId(e.target.value)}>
          <option value="">Select Doctor</option>
          {doctors.map((d) => (
            <option key={d._id} value={d._id}>
              {d.name} — {d.specialization}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <button onClick={bookAppointment}>Book Appointment</button>
      </div>
    </div>
  );
}

export default PatientDashboard;
