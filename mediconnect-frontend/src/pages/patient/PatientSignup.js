import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PatientSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerPatient = async () => {
    try {
      await axios.post(
        "http://localhost:5001/api/patients/register",
        { name, email, password }
      );

      alert("Registration successful! Please login.");
      navigate("/patient/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

return (
  <div className="center">
    <div className="card">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>Patient Registration</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="primary-btn" onClick={registerPatient}>
        Register
      </button>
    </div>
  </div>
);

}

export default PatientSignup;
