require("dotenv").config();
const express = require("express");
const cors = require("cors");
const admin = require("./config/firebaseConfig");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
