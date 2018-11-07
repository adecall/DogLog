const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const md5 = require('md5');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

<<<<<<< HEAD
const VolunteerSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true, 
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please input your email address'
    },
    fname: {
        type: String,
        required: 'Please input your First Name', 
        trim: true,
        lowercase: true
    },
    lname: {
        type: String,
        required: 'Please input your Last Name', 
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: 'Please input your password', 
    },
    shelter:  {
        type: Schema.Types.ObjectId, 
        ref: 'Shelter'
    },
    
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

VolunteerSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
VolunteerSchema.plugin(mongodbErrorHandler);


//this will be our data base's data structure 
// const VolunteerSchema = new Schema(
  // {
  // 
    // fname: String,
    // lname: String,
    // email: String,
    // password: String,
    // shelter: { type: Schema.Types.ObjectId, ref: 'Shelter' },
  // },
  // { timestamps: true }
// );
=======
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
>>>>>>> 5553315778dc54b04370319a3e0df2a5bdfadded

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Volunteer", VolunteerSchema);