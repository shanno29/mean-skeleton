var express = require('express');
var router = express.Router();

// GET /api
router.all('/*', function(req, res) {
	res.sendFile('index.html', { root: config.server.distFolder });
});

module.exports = router;
