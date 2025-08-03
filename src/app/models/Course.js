const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255, default: 'hahaha' }, // default value, chi tiet hon
    description: { type: String, maxLength: 600, default: 'hehehe' },
    Image: { type: String, maxLength: 255 },
    createAt: { type: Date, default: Date.now }, // thoi gian tao
    updateAt: { type: Date, default: Date.now }, // thoi gian cap
});

module.exports = mongoose.model('Course', Course); // ten model, ten collection trong db
