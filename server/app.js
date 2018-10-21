const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allows cross-origin requests
app.use(cors());

mongoose.connect('mongodb://alex123:alex123@ds145072.mlab.com:45072/heroku_pgz78hxp');
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