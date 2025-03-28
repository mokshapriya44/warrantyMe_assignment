const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// OAuth2 Client Setup
const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Load saved token (if available)
const TOKEN_PATH = path.join(__dirname, "google-token.json");

if (fs.existsSync(TOKEN_PATH)) {
  const token = fs.readFileSync(TOKEN_PATH, "utf8");
  oAuth2Client.setCredentials(JSON.parse(token));
} else {
  console.error("❌ No token found! Authenticate first.");
}

module.exports = oAuth2Client;
