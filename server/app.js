require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allows cross-origin requests
app.use(cors());

mongoose.connect('mongodb://' + process.env.username + ':' + process.env.password + '@' + process.env.host + ':' + process.env.port + '/' + process.env.database);
mongoose.connection.once('open', () => {
    console.log('connected to the database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});