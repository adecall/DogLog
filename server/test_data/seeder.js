const db = require('../models')
const uniqueNames = require('unique-names-generator');
const personNameGenerator = require('node-random-name');
const dogNames = require('dog-names');
const loremIpsum = require('lorem-ipsum');

const numShelters = 10;
const numAnimalsPerShelter = 300;
const numVolunteersPerShelter = 12;
const numVolunteerReportsPerAnimal = 25;
/**
 * Resets all model data. Returns a Promise
 * Usage: resetData().then(() => {}).catch(err => {})
 */
const resetData = () => {
    seederLog("Resetting data");
    const models = ['Animal','Volunteer','VolunteerReport','Shelter'];
    // builds up array of promise callbacks
    const removeMethods = [];
    models.forEach(modelName => {
        removeMethods.push( new Promise ((localResolve, localReject) => {
            
            try{
                // Drop and create
                db[modelName].collection.drop();
                db[modelName].createCollection().then(() => {
                    localResolve()
                }).catch(err => {
                    localReject(err)
                })
                localResolve()
            } catch(err) {
                localReject(err);
            }
        }));
    })
    return Promise.all(removeMethods)
}



/**
 * Creates new fake data. Returns a Promise
 * Usage: resetData().then(() => {}).catch(err => {})
 */
const seedData = () => {
    seederLog("Seeding new data");
    return new Promise( (resolve, reject) => {

        // First, let's go through each shelter we need to make
        for (let j=0; j<numShelters; j++) {

            // Create a shelter
            db.Shelter.create({
                name: uniqueNames.generate(' ')
            }).then(shelter => {
                seederLog(`Created shelter: ${shelter.name}`)
                // Let's create a bunch of animals in that shelter
                const animalCreationPromises = []
                for (let k=0; k<numAnimalsPerShelter; k++) {
                    animalCreationPromises.push(buildAnimalCreationPromise(shelter))
                }

                // Now let's create a bunch of volunteers
                volunteerCreationPromises = []
                for (let k=0; k<numVolunteersPerShelter; k++) {
                    volunteerCreationPromises.push(buildVolunteerCreationPromise(shelter))
                }

                seederLog(`Creating ${numAnimalsPerShelter} animals for shelter: ${shelter.name}`)
                // will house results from first set of promises
                let createdAnimals
                Promise.all(animalCreationPromises)
                .then(promisedCreatedAnimals => {
                    createdAnimals = promisedCreatedAnimals;
                    seederLog(`Creating ${numVolunteersPerShelter} volunteers for shelter: ${shelter.name}`)
                    return Promise.all(volunteerCreationPromises)
                })
                .then(createdVolunteers => {
                    // @todo create reports for volunteers to animals

                    // for each animal, create some reports 
                    seederLog(`Creating ${numVolunteerReportsPerAnimal} volunteer reports for each animal for shelter: ${shelter.name} using a random volunteer`)
                    for(var l=0; l< createdAnimals.length; l++) {
                        for(var m=0; m< numVolunteerReportsPerAnimal; m++) {
                            // Get a random volunteer and do it!
                            const randVolunteerIdx = Math.floor(Math.random() * createdVolunteers.length)                            
                            db.VolunteerReport.create({
                                shelter: shelter._id,
                                volunteer: createdVolunteers[randVolunteerIdx]._id,
                                animal: createdAnimals[l]._id,
                                sit_rating: Math.floor((Math.random() * 5) + 1),
                                lay_down_rating: Math.floor((Math.random() * 5) + 1),
                                walk_on_leash_rating: Math.floor((Math.random() * 5) + 1),
                                sit_in_crate_rating: Math.floor((Math.random() * 5) + 1),
                                comment: loremIpsum({
                                    count: 2,
                                    units: 'sentences',
                                }),
                            })
                        }   
                    }
                    
                    resolve("done")
                })
                .catch(err => {
                    reject(err);
                })

            }).catch(err => {
                reject(err)
            })
        }
        
    })
}

const buildAnimalCreationPromise = (shelter) => {
    return new Promise( (resolve, reject) => {
        const gender = Math.round(Math.random()) === 1 ? 'M': 'F'
        db.Animal.create({
            animalType: 'dog',
            sex: gender,
            size: Math.floor(Math.random() * 130) + 'lbs',
            age: Math.floor(Math.random() * 15),
            name: gender === 'F' ? dogNames.femaleRandom() : dogNames.maleRandom(),
            shelter: shelter._id
        }).then(animal => {
            resolve(animal)
        }).catch(err => {
            reject(err);
        })
        
    })
}

const buildVolunteerCreationPromise = (shelter) => {
    return new Promise( (resolve, reject) => {

        const volunteerData = {
            fname: personNameGenerator({first: true}),
            lname: personNameGenerator({last: true}),
            email: uniqueNames.generate('-') + '@somewhere.com',
            password: 'abc12345',
            shelter: shelter._id
        }
        
        
        db.Volunteer.create(volunteerData)
        .then(volunteer => {
            resolve(volunteer)
        }).catch(err => {
            reject(err);
        })
    })
}


const seederLog = (msg) => {
    console.log(`[seeder] ${msg}`);
}

module.exports = {
    resetData,
    seedData
}