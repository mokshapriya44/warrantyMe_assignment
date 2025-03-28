const express = require("express");
const { google } = require("googleapis");
const multer = require("multer");
const streamifier = require("streamifier");
require("dotenv").config();
const cors = require("cors");

const router = express.Router();
router.use(cors());

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Ensure Refresh Token is Set
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const drive = google.drive({ version: "v3", auth: oauth2Client });

const upload = multer();

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const bufferStream = streamifier.createReadStream(req.file.buffer);

    const fileMetadata = {
      name: `Letter_${Date.now()}.docx`,
      mimeType: "application/vnd.google-apps.document",
      parents: ["1lv2ufPCbmQaKkFNWprTs8LF89NoI7c-s"], // Replace with your folder ID
    };

    const media = {
      mimeType: req.file.mimetype,
      body: bufferStream,
    };

    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id, name, webViewLink",
    });

    console.log("Google Drive Upload Response:", response.data);

    res.status(200).json({
      fileId: response.data.id,
      fileName: response.data.name,
      fileUrl: response.data.webViewLink,
      message: "File uploaded successfully!",
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "File upload failed" });
  }
});

module.exports = router;
