
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const Animal = require("./animal");
const API_PORT = 3001;
const app = express();
const router = express.Router();

// this is our MongoDB database
const dbRoute =  "mongodb://ayna:Elhanang2@ds235243.mlab.com:35243/reactdb";
// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getData", (req, res) => {
    Data.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true,data:data });
    });
  });
  router.post("/putData", (req, res) => {
    let data = new Data();
  
    const { id, fname, lname, email } = req.body;
  
    // if ((!id && id !== 0) || !fname || !lname || !email) {
    //   return res.json({
    //     success: false,
    //     error: "INVALID INPUTS"
    //   });
    // }
    // else{
      data.id = id;
    data.fname = fname;
    
    data.lname= lname;
    data.email= email;
    data.save(err => {
      console.log("data: "+ data);
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  // }
  });

  router.get("/getAnimal", (req, res) => {
    // if animal type is dog 
    {/*var query = {$and:[{animaltype:{$regex: req.body.animaltype, $options: 'i'}},
    {size:{$regex: req.body.size, $options: 'i'}},
    {agelable:{$regex: req.body.agelable, $options: 'i'}},
  {sex:{$regex: req.body.sex, $options: 'i'}},{weight:1}]}*/}
    Animal.find((err, animal) => {
      console.log("animal"+ animal);
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, animal:animal });
    });
  });
  
  
  router.post("/putAnimal", (req, res)=> {
    let animal = new Animal();
    const { id, animaltype, name, weight , sex, age }= req.body;

    animal.id = id;
    animal.animaltype = animaltype;
    animal.name = name;
    animal.weight = weight;
    animal.sex = sex;
    animal.age = age;
    if(animaltype == "cat"){
      if(weight < 8){
        animal.size = "small";
      }else if((weight > 9) && (weight < 13)){
        animal.size = "medium";
      }else if((weight >14) && (weight < 20)){
        animal.size = "large";
      }else if ((weight > 20)){
        animal.size = "extra-large";
      }
    }else if(animaltype == "dog"){
      if(weight < 25){
        animal.size = "small";
      }else if((weight >= 25) && (weight <= 50)){
        animal.size = "medium";
      }else if((weight >= 51) && (weight <= 75)){
        animal.size = "large";
      }else if ((weight > 75)){
        animal.size = "extra-large";
      }
    }
    if((animaltype == "dog") || (animaltype == "cat")){
      if(age < 1){
        animal.agelable = "baby"
      }else if(age >1 && age <=3){
        animal.agelable = "young"
      }else if(age >= 4 && age <= 10){
        animal.agelable = "adult"
      }else if(age >10){
        animal.agelable = "senior"
      }
    }
    animal.save(err => {
      console.log("animal: "+ animal);
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    })
  });
  app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
