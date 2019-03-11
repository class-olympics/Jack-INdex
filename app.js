const express = require('express');
const fs = require('fs');
const app = express();

let events = [];
fs.readFile('events.json', (err, data) => {
    events = JSON.parse(data);
})

app.use(express.static('public'));
app.use(express.json());

app.get('/',(req, res) => {
})

app.get('/events',(req,res) => {
   res.send(events); 
})
app.post('/answer',(req, res) => {

})

app.listen(3000, () => {
    console.log('THE YEETING HAS BEGUN!!! IN THE NAME OF RIGHTOUSNESS!');
})