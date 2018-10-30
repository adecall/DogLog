
/**
 * Resets all model data. Returns a Promise
 * Usage: resetData().then(() => {}).catch(err => {})
 */
const resetData = () => {
    const models = ['Animal','User','VolunteerReport','Shelter'];
    // builds up array of promise callbacks
    const removeMethods = [];
    models.forEach(modelName => {
        removeMethods.push( (localResolve) => {
            db[modelName].remove(null, () => {
                localResolve()
            })
        } );
    })
    return Promise.all(removeMethods)
}



/**
 * Creates new fake data. Returns a Promise
 * Usage: resetData().then(() => {}).catch(err => {})
 */
const seedData = () => {
    return new Promise( (resolve, reject) => {
        resolve("Done")
    })
}

module.exports = {
    resetData,
    seedData
}