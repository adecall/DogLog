const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const VolunteerSchema = new Schema(
  {
  
    fname: String,
    lname: String,
    email: String,
    password: String,
    shelter: { type: Schema.Types.ObjectId, ref: 'Shelter' },
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Volunteer", VolunteerSchema);