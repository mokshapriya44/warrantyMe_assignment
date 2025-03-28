const fs = require("fs");
const { google } = require("googleapis");
const path = require("path");

// Load service account credentials (Use your service account JSON file)
const KEY_FILE_PATH = path.join(__dirname, "../config/serviceAccount.json");

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE_PATH,
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

/**
 * Upload a file to Google Drive
 * @param {string} filePath - The local file path to upload
 * @param {string} fileName - The name of the file in Google Drive
 */
async function uploadFile(filePath, fileName) {
  try {
    const fileMetadata = { name: fileName };
    const media = {
      mimeType: "application/octet-stream",
      body: fs.createReadStream(filePath),
    };

    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });

    console.log("✅ File uploaded! File ID:", response.data.id);
    return response.data;
  } catch (error) {
    console.error("❌ Error uploading file:", error.message);
    throw error;
  }
}

module.exports = { uploadFile };
