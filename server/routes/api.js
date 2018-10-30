const express = require('express');
const db = require('../models')
const router = express.Router();
const seeder = require('../test_data/seeder');

router.get("/getData", (req, res) => {
    db.User.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});
router.post("/putData", (req, res) => {
    let data = new db.User();

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
    var query = {
        $and: [{ animaltype: { $regex: req.body.animaltype, $options: 'i' } },
        { size: { $regex: req.body.size, $options: 'i' } },
        { agelable: { $regex: req.body.agelable, $options: 'i' } },
        { sex: { $regex: req.body.sex, $options: 'i' } }, { weight: 1 }]
    }
    db.Animal.find(query, (err, animal) => {
        console.log("animal" + animal);
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, animal: animal });
    });
});


router.post("/putAnimal", (req, res) => {
    let animal = new db.Animal();
    const { id, animaltype, name, weight, sex, age } = req.body;

    animal.id = id;
    animal.animaltype = animaltype;
    animal.name = name;
    animal.weight = weight;
    animal.sex = sex;
    animal.age = age;
    if (animaltype == "cat") {
        if (weight < 8) {
            animal.size = "small";
        } else if ((weight > 9) && (weight < 13)) {
            animal.size = "medium";
        } else if ((weight > 14) && (weight < 20)) {
            animal.size = "large";
        } else if ((weight > 20)) {
            animal.size = "extra-large";
        }
    } else if (animaltype == "dog") {
        if (weight < 25) {
            animal.size = "small";
        } else if ((weight >= 25) && (weight <= 50)) {
            animal.size = "medium";
        } else if ((weight >= 51) && (weight <= 75)) {
            animal.size = "large";
        } else if ((weight > 75)) {
            animal.size = "extra-large";
        }
    }
    if ((animaltype == "dog") || (animaltype == "cat")) {
        if (age < 1) {
            animal.agelable = "baby"
        } else if (age > 1 && age <= 3) {
            animal.agelable = "young"
        } else if (age >= 4 && age <= 10) {
            animal.agelable = "adult"
        } else if (age > 10) {
            animal.agelable = "senior"
        }
    }
    animal.save(err => {
        console.log("animal: " + animal);
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

module.exports = router;