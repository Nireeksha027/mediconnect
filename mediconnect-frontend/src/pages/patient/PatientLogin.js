import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PatientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 


  const loginPatient = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/patients/login",
        { email, password }
      );

      // ✅ STORE PATIENT INFO (VERY IMPORTANT)
      localStorage.setItem("patientId", res.data.patient._id);
      localStorage.setItem("patientName", res.data.patient.name);

      navigate("/patient/dashboard");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="center">
      <div className="card">
        <button className="back-btn" onClick={() => navigate(-1)}>
  ← Back
</button>

        <h2>Patient Login</h2>

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

        <button onClick={loginPatient}>Login</button>

        <p style={{ textAlign: "center", marginTop: "12px" }}>
          New patient?{" "}
          <button
            className="link-btn"
            onClick={() => navigate("/patient/register")}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default PatientLogin;
