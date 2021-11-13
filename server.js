const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const items =require('./route/api/items')
const app = express();


// bodyparser middleware 
app.use(bodyParser.json()); 


// Databease config 
const mongoURI = require('./config/keys').mongoURI

console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || mongoURI ,{useNewUrlParser:true,useUnifiedTopology:true})



const { connection } = mongoose;
connection.on('connected', () => {
	console.log('mongoDB database connection established successfully');
});
// use route
app.use('/api/items',items);

//servestatic assets if in production
if(process.env.NODE_ENV ==='peoduction'){
    app.use(express.static('client/build'))
}

const port = process.env.PORT || 5000;
app.listen(port ,()=>console.log(`server conect sucssceful in port ${port} `))