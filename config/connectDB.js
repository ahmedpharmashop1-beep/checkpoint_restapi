const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('Database connection failed:', error);
    }
}

module.exports = connectDB;