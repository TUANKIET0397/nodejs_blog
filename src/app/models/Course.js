const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, require: true }, // default value, chi tiet hon
        description: { type: String },
        image: { type: String },
        videoId: { type: String, require: true }, // default value, chi tiet hon
        lever: { type: String, require: true }, // default value, chi tiet hon
        // createAt: { type: Date, default: Date.now }, // thoi gian tao
        // updateAt: { type: Date, default: Date.now }, // thoi gian cap
        slug: { type: String, slug: 'name', unique: true }, // slug tu dong tao tu name
    },
    {
        timestamps: true, // tự động thêm createAt và updateAt})
    },
);
module.exports = mongoose.model('Course', Course); // ten model, ten collection trong db
