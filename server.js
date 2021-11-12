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
mongoose.connect(mongoURI ,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("MongooDB Conected..."))
.catch((err => console.log(err)))

// const { connection } = mongoose;
// connection.once('open', () => {
// 	console.log('mongoDB database connection established successfully');
// });
// use route
app.use('/api/items',items);

//servestatic assets if in production
if(process.env.NODE_ENV ==="production"){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const port = process.env.PORT || 5000;
app.listen(port ,()=>console.log(`server conect sucssceful in port ${port} `))