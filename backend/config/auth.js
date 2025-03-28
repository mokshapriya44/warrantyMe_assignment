const { google } = require("googleapis");
const oAuth2Client = require("./config/googleAuth");

const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: ["https://www.googleapis.com/auth/drive.file"],
});

console.log("🔗 Open this URL in your browser:", authUrl);
