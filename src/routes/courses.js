const express = require('express');
// const app = express() đã nạp ở file index rồi
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:slug', courseController.show);

module.exports = router;
