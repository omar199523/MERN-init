const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


// bodyparser middleware 
app.use(bodyParser.json()); 

// const db = require('./config/keys').mongoURL;

// mongoose.connect(db)
// .then(()=>console.log("MongoDM Conected ..."))
// .catch(err => console.log(err))


const port = process.env.PORT || 5000;
app.listen(port ,()=>console.log(`server conect sucssceful in port ${port} `))