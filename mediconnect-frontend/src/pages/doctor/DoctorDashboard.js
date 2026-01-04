import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorDashboard() {
  const doctorId = localStorage.getItem("doctorId");
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/appointments/doctor/${doctorId}`)
      .then((res) => setAppointments(res.data));
  }, [doctorId]);

  const markDone = async (id) => {
    await axios.delete(`http://localhost:5001/api/appointments/${id}`);
    setAppointments(appointments.filter((a) => a._id !== id));
  };

  return (
    <div style={{ padding: "30px" }}>
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 style={{ marginBottom: "20px" }}>My Appointments</h2>

      {appointments.length === 0 ? (
        <p>No appointments</p>
      ) : (
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((a) => (
              <tr key={a._id}>
                <td>{a.patientName}</td>
                <td>{a.reason || "-"}</td>
                <td>{a.date}</td>
                <td>
                  <button
                    className="success-btn"
                    onClick={() => markDone(a._id)}
                  >
                    Mark as Done
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DoctorDashboard;
