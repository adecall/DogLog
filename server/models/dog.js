const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: String,
    age: Number,
    size: String,
    gender: String,
    volunteer_id: String
});

module.exports = mongoose.model('Dog', dogSchema);