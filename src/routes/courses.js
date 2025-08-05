// tính chất của route thì nó sẽ luôn match từ trên xuống, và luôn match vào route đầu tiên

const express = require('express');
// const app = express() đã nạp ở file index rồi
const router = express.Router();
exports.router = router;

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;
