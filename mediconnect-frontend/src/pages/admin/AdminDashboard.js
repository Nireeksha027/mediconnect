import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AdminDashboard() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
  });
  const navigate = useNavigate();


  useEffect(() => {
    fetchDoctors();
  }, []);
  

  const fetchDoctors = async () => {
    const res = await axios.get("http://localhost:5001/api/doctors");
    setDoctors(res.data);
  };

  const addDoctor = async () => {
    await axios.post("http://localhost:5001/api/doctors", form);
    fetchDoctors();
  };

  const delDoctor = async (id) => {
    await axios.delete(`http://localhost:5001/api/doctors/${id}`);
    fetchDoctors();
  };

  return (
    <div className="center">
      <div className="card wide-card">
        <button className="back-btn" onClick={() => navigate(-1)}>
  ← Back
</button>

        <h2>Admin Dashboard</h2>

        <h3>Add Doctor</h3>

        <div className="form-grid">
          <input
            placeholder="Doctor Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            placeholder="Password"
            type="password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <input
            placeholder="Specialization"
            onChange={(e) =>
              setForm({ ...form, specialization: e.target.value })
            }
          />
        </div>

        <button className="primary-btn" onClick={addDoctor}>
          Add Doctor
        </button>

        <hr />

        <h3>Doctors List</h3>

        {doctors.length === 0 ? (
          <p>No doctors added yet</p>
        ) : (
          doctors.map((d) => (
            <div key={d._id} className="list-item">
              <span>
                <strong>{d.name}</strong> — {d.specialization}
              </span>
              <button
                className="danger-btn"
                onClick={() => delDoctor(d._id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
