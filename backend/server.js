const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse form data

// Import Routes
const googleDriveRoutes = require("./routes/googleDriveRoutes");
app.use("/api", googleDriveRoutes); // ✅ This mounts /api/upload

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
