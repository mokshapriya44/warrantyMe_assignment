const express = require("express");
const admin = require("../config/firebaseConfig");

const router = express.Router();

// Verify Firebase Token
router.post("/verify-token", async (req, res) => {
    const { token } = req.body;

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        res.json({ success: true, uid: decodedToken.uid, email: decodedToken.email });
    } catch (error) {
        res.status(401).json({ success: false, error: "Invalid token" });
    }
});

module.exports = router;
