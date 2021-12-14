const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')
const config = require('config')

const persons =require('./route/api/persons')
const users =require('./route/api/users')
const auth =require('./route/api/auth')
const addAdmin = require('./route/api/addAdmin')
const app = express();


// bodyparser middleware 
app.use(express.json()); 





// process.env.MONGODB_URI ||
mongoose.connect( process.env.MONGODB_URI || config.get('mongoURI') ,{useNewUrlParser:true,useUnifiedTopology:true})



const { connection } = mongoose;
connection.on('connected',async ()=>{
	await console.log('mongoDB database connection established successfully');
    // await addAdmin("admin@info.in")
});
// use route
app.use('/api/persons',persons);
app.use('/api/user',users);
app.use('/api/auth',auth);
//serve static assets if in production
if(process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join(__dirname, 'client','build')));

    app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
    });
}
 
//Add admin user


const port = process.env.PORT || 5000;
app.listen(port ,()=>console.log(`server conect sucssceful in port ${port} `))