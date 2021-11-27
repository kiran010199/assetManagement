const express = require('express');
const router = express.Router();
const assetRoutes = require('./assets.route');

router.use('/asset', assetRoutes);
module.exports = router;