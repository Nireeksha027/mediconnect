# 🏥 MediConnect – Medical Appointment System (MERN)

MediConnect is a MERN stack web application designed to manage medical appointments between **Patients**, **Doctors**, and **Admin** in a simple and organized way.

This system allows patients to book appointments online, doctors to manage schedules, and admins to control the overall application.

## Features

### Patient
- Register and login
- Book medical appointments
- View appointment status
- Access patient dashboard

### Doctor
- Secure login
- View assigned appointments
- Manage doctor dashboard

### Admin
- Admin login
- View doctors and patients
- Monitor appointments
- Manage system data

## Tech Stack

**Frontend**
- React
- CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB (Mongoose)

---

## 📁 Project Structure

mediconnect/
├── mediconnect-backend/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── package.json
│
├── mediconnect-frontend/
│ ├── public/
│ ├── src/
│ └── package.json
│
├── .gitignore
└── README.md

## ⚙️ How to Run the Project

1️⃣ Clone the Repository
git clone https://github.com/Nireeksha027/mediconnect.git
cd mediconnect

2️⃣ Backend Setup
cd mediconnect-backend
npm install
npm run dev

Create a .env file inside mediconnect-backend:
PORT=5001
MONGO_URI=your_mongodb_connection_string

3️⃣ Frontend Setup
cd mediconnect-frontend
npm install
npm start

🌐 Application URLs
Frontend: http://localhost:3000
Backend: http://localhost:5001

🔐 Authentication
Separate login for Admin, Doctor, and Patient
Role-based dashboards
Secure API handling using Express and MongoDB
