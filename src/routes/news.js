const express = require('express');
// const app = express() đã nạp ở file index rồi
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
