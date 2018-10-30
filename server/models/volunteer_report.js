const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VolunteerReport = new Schema({
    name: String,
    sit_rating: Number,
    lay_down_rating: Number,
    walk_on_leash_rating: Number,
    sit_in_crate_rating: Number,
    comment: String
});

module.exports = mongoose.model('VolunteerReport', VolunteerReport);