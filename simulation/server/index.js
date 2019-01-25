const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');
const contrlr = require('./controllers/controller');

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then((db) =>
{
    app.set('db', db);
});

// requests go here
//
//
//__________________
PORT=process.env.PORT || 3000;

app.listen(PORT, () =>
{
    console.log("im listening on port", PORT);
})