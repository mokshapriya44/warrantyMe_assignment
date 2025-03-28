const { google } = require("googleapis");
require("dotenv").config();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

const { tokens } = await oAuth2Client.getToken(code);
oAuth2Client.setCredentials(tokens);

// If the access token expires, use the refresh token to get a new one
const newTokens = await oAuth2Client.refreshAccessToken();
oAuth2Client.setCredentials(newTokens.credentials);


const drive = google.drive({ version: "v3", auth: oauth2Client });

module.exports = drive;
