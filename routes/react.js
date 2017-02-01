const config = require('config');
const express = require('express');
const router = express.Router();

// GET /api
router.all('/*', function(req, res) {
	res.sendFile('index.html', {root: config.get('server.distFolder')});
});

module.exports = router;
