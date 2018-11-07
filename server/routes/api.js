const express = require('express');
const db = require('../models')
const router = express.Router();
const seeder = require('../test_data/seeder');
const volController = require('../controllers/volController');
const authController = require('../controllers/authController');
const passport = require('../passport');

router.get('/Login', volController.Login);
router.post('/Login', passport.authenticate('local'), function(req, res) {
    console.log(req.user);
    res.json({success: true, user: req.user});
});


router.get('/Signup', volController.Signup);

router.post('/Signup', volController.Signup);

router.get('/Logout', authController.Logout);


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
    var query = {
        $and: [{ animaltype: { $regex: req.body.animaltype, $options: 'i' } },
        { size: { $regex: req.body.size, $options: 'i' } },
        { agelabel: { $regex: req.body.agelabel, $options: 'i' } },
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

    const { id, animaltype, name, weight, sex, age, zipcode ,image} = req.body;

    animal.id = id;
    animal.animaltype = animaltype;
    animal.name = name;
    animal.weight = weight;
    animal.sex = sex;
    animal.age = age;
    animal.zipcode = zipcode;

    animal.image = image; // I like comments

        if (weight < 25) {
            animal.size = "small";
        } else if ((weight >= 25) && (weight <= 50)) {
            animal.size = "medium";
        } else if ((weight >= 51) && (weight <= 75)) {
            animal.size = "large";
        } else if ((weight > 75)) {
            animal.size = "extra-large";
        }
        
        if (age < 1) {
            animal.agelabel = "baby"
        } else if (age > 1 && age <= 3) {
            animal.agelabel = "young"
        } else if (age >= 4 && age <= 10) {
            animal.agelabel = "adult"
        } else if (age > 10) {
            animal.agelabel = "senior"
        }
    
    

    console.log(animal);

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

router.post("/addrating", (req, res) => {
    let volunteerReport = new db.VolunteerReport();
    const { name, sit_rating, lay_down_rating, walk_on_leash_rating, sit_in_crate_rating, comment } = req.body;
    volunteerReport.name= name;
    volunteerReport.sit_rating= sit_rating;
    volunteerReport.lay_down_rating = lay_down_rating;
    volunteerReport.walk_on_leash_rating = walk_on_leash_rating;
    volunteerReport.sit_in_crate_rating = sit_in_crate_rating;
    volunteerReport.comment =comment;
    volunteerReport.save(err => {
        console.log("volunteer: "+ volunteerReport);
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });

});

// router.get("/getRating/")

module.exports = router;