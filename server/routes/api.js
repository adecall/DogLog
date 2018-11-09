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
        // res.send(data);
    });
});
router.post("/putData", (req, res) => {
    let data = new db.Volunteer();

    const { fname, lname, email, password } = req.body;

    data.fname = fname;

    data.lname = lname;
    data.email = email;
    data.password = password;
    data.save(err => {
        // console.log("data: " + data);
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
    // }
});
router.get("/getRating:id", (req, res) => {
        db.VolunteerReport.find((err, data) => {
            if (err) return err;
            // return res.json({ success: true, rating: data });
            res.send({data})
        });
    });

router.get("/getAnimal", (req, res) => {
    // if animal type is dog 
    var query = {
        $and: [
            
        { size: { $regex: req.query.size, $options: 'i' } },
        { agelabel: { $regex: req.query.agelabel, $options: 'i' } },
        { sex: { $regex: req.query.sex, $options: 'i' } }]
    }
    db.Animal.find(query, 
     (err, data) => {
        // console.log("animal" + animal);
        if (err) return res.json({ success: false, error: err });
        res.send(data)
        // console.log("animal" + data);
    });
});


router.post("/putAnimal", (req, res) => {
    let animal = new db.Animal();

    const { id, animaltype, name, weight, sex, age ,image} = req.body;

    animal.id = id;
    animal.animaltype = animaltype;
    animal.name = name;
    animal.weight = weight;
    animal.sex = sex;
    animal.age = age;
    

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
    
    

    // console.log(animal);

    animal.save(err => {
        console.log(animal);
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

router.post("/addrating/:id", (req, res) => {
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

// router.get("/getRating", (req,res) => {
//     db.Animal.find().populate("VolunteerReport",(err, ratingdata) =>{
//         if (err) return res.json({ success: false, error: err });
//          res.json({ success: true, rating :ratingdata});
//     }) 
        
    
// })
// router.get("/getrating", (req, res) => {
//     db.Volunteer.find((err, data) => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true, rating: data });
//         // res.send({data})
//     });
// });
module.exports = router;