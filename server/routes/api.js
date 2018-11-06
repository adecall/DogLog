const express = require('express');
const db = require('../models')
const router = express.Router();
const seeder = require('../test_data/seeder');

router.get("/getData", (req, res) => {
    db.Volunteer.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});
router.post("/putData", (req, res) => {
    let data = new db.Volunteer();

    const { fname, lname, email } = req.body;

    // if ((!id && id !== 0) || !fname || !lname || !email) {
    //   return res.json({
    //     success: false,
    //     error: "INVALID INPUTS"
    //   });
    // }
    // else{
    
    data.fname = fname;

    data.lname = lname;
    data.email = email;
    data.save(err => {
        console.log("data: " + data);
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
    // }
});

router.get("/getAnimal", (req, res) => {
    // if animal type is dog 
    const {size, agelable,sex, zipcode}= req.query;
    var query = {
        params:{
        $and: [
        { size: { $regex: size, $options: 'i' } },
        { agelable: { $regex: agelable, $options: 'i' } },
        { sex: { $regex: sex, $options: 'i' } },
        { zipcode: { $regex: zipcode}}]}
    }
    // console.log("query: "+ query)
    db.Animal.find({
        $and: [
        { size: { $regex: size, $options: 'i' } },
        { agelable: { $regex: agelable, $options: 'i' } },
        { sex: { $regex: sex, $options: 'i' } },
        // { zipcode: { $regex: zipcode}}
    ]}
    , (err, data) => {
        
        if (err) return res.json({ success: false, error: err });
        res.send(data)
        console.log("animal" + data);
    });
});


router.post("/putAnimal", (req, res) => {
    let animal = new db.Animal();
    const { id, animaltype, name, weight, sex, age, zipcode } = req.body;

    animal.id = id;
    animal.animaltype = animaltype;
    animal.name = name;
    animal.weight = weight;
    animal.sex = sex;
    animal.age = age;
    animal.zipcode = zipcode;
    
    // if (animaltype == "cat") {
    //     if (weight < 8) {
    //         animal.size = "small";
    //     } else if ((weight > 9) && (weight < 13)) {
    //         animal.size = "medium";
    //     } else if ((weight > 14) && (weight < 20)) {
    //         animal.size = "large";
    //     } else if ((weight > 20)) {
    //         animal.size = "extra-large";
    //     }
    // } else
    //  if (animaltype == "dog") {
        if (weight < 25) {
            animal.size = "small";
        } else if ((weight >= 25) && (weight <= 50)) {
            animal.size = "medium";
        } else if ((weight >= 51) && (weight <= 75)) {
            animal.size = "large";
        } else if ((weight > 75)) {
            animal.size = "extra-large";
        }
    // }
    // if ((animaltype == "dog") || (animaltype == "cat")) {
        if (age < 1) {
            animal.agelable = "baby"
        } else if (age > 1 && age <= 3) {
            animal.agelable = "young"
        } else if (age > 3 && age <= 10) {
            animal.agelable = "adult"
        } else if (age > 10) {
            animal.agelable = "senior"
        }
    // }
    
    animal.save(err => {
        
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    })
});


// POST /seed_data[?reset=true]
// Intent here is to seed animal, and volunteer data
// optionally pass ?reset query param to empty existing data models
router.post('/seed_data', (req, res) => {

    if (req.query.reset) {
        seeder.resetData()
        .then(() => seeder.seedData())
        .then(() => {
            res.json({success: true});
        })
        .catch(err => {
            res.json({success: false, error: err})
        })
        
    } else {
        seeder.seedData().then( () => {
            res.json({success: true})
        }).catch(err => {
            res.json({success: false, error: err})
        })
    }
})

router.post("/addrating", (req, res) => {
    let volenteerReport = new db.VolunteerReport();
    const { name, sit_rating, lay_down_rating, walk_on_leash_rating, sit_in_crate_rating, comment } = req.body;
    volenteerReport.name= name;
    volenteerReport.sit_rating= sit_rating;
    volenteerReport.lay_down_rating = lay_down_rating;
    volenteerReport.walk_on_leash_rating = walk_on_leash_rating;
    volenteerReport.sit_in_crate_rating = sit_in_crate_rating;
    volenteerReport.comment =comment;
    volenteerReport.save(err => {
        console.log("volenteer: "+ volenteerReport);
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
    
});
// router.get("/getRating/")
module.exports = router;