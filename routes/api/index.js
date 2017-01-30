const express = require('express');
const router = express.Router();

// GET /api
router.get('/', function(req, res) {
	res.status(200).json({ success: true, data: "Welcome to the API" });
});

module.exports = router;
