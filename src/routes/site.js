const express = require('express');
// const app = express() đã nạp ở file index rồi
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
