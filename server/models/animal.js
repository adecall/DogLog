
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const AnimalSchema = new Schema(
  {
    id: Number,
    animaltype: String,
    name: String,
    weight: Number,
    sex: String,
    age: Number,
    size: String,
    agelable: String,
    likes: Number,
    shelter: { type: Schema.Types.ObjectId, ref: 'Shelter' },
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Animal", AnimalSchema);