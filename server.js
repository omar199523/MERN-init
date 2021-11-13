const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const items =require('./route/api/items')
const users =require('./route/api/users')
const app = express();


// bodyparser middleware 
app.use(express.json()); 


// Databease config 


// process.env.MONGODB_URI ||
mongoose.connect( process.env.MONGODB_URI || require('./config/keys').mongoURI ,{useNewUrlParser:true,useUnifiedTopology:true})



const { connection } = mongoose;
connection.on('connected', () => {
	console.log('mongoDB database connection established successfully');
});
// use route
app.use('/api/items',items);
app.use('/api/users',users);
//serve static assets if in production
if(process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join(__dirname, 'client','build')));

    app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
    });
}
 


const port = process.env.PORT || 5000;
app.listen(port ,()=>console.log(`server conect sucssceful in port ${port} `))