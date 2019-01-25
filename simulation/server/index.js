const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');
const contrlr = require('./controllers/controller');

const app = express();
app.use(bodyParser.json());
// app.use(express.static(__dirname + './../build'));
massive(process.env.CONNECTION_STRING).then((db) =>
{
    app.set('db', db);
});

app.get('/api/products', contrlr.getAll);
app.get('/api/products/:id', contrlr.getOne);
app.post('/api/products', contrlr.postOne);
app.put('/api/products', contrlr.updateOne);
app.delete('/api/products/:id',contrlr.deleteOne)

// requests go here ^^^^

PORT=process.env.SERVER_PORT || 3000;

app.listen(PORT, () =>
{
    console.log("im listening on port", PORT);
})