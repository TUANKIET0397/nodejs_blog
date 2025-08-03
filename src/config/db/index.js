const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Course');
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}
module.exports = { connect };
