const express =require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


// users model
const Users = require('../../models/user')
//  @route get api/Users
// @ desc Register new user
// @access puplic
router.get ('/',(req,res)=>{
    Users.find()
    .sort({date: -1})
    .then((data)=>res.json(data))
    .catch((err=>console.log(err)));
})
//  @route post api/Users
// @ desc Register new user
// @access puplic
router.post ('/add',(req,res)=>{
    const {name , email, password} = req.body;
    //  simple validation
    if(!name || !email || !password){
        return res.status(400).json({msg:"please enter all fields"})
    }

    User.findOne({email})
    .then(user =>{
        if(user) return res.status(400).json({msg:"user already exists"})
    })
    const newUser =new User({
        name,
        email,
        password
    })
    // create salt $ hach
    bcrypt.genSalt (10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
                .then(user=>{
                    res.json({
                        user:{
                            id:user.id,
                            name:user.name,
                            email:user.email
                        }
                    })
                })
        })
    })
})



module.exports = router;