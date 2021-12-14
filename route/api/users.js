const express =require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt =require('jsonwebtoken')
const auth = require("../../middelwaer/auth")

// users model
const Users = require('../../models/user')

//  @route post api/Users
// @ desc Register new user
// @access puplic
router.post ('/',(req,res)=>{
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
                    jwt.sign(
                        {id:user.id,
                        name:user.name,
                        email:user.email},
                        config.get("jwtSecret"),
                        {expiresIn :3600},
                        (err,token)=>{
                            if(err) throw err;
                            res.json({
                                token,
                                user:{
                                    id:user.id,
                                    name:user.name,
                                    email:user.email
                                }
                            })

                        }
                    )
                })
        })
    })
})

// router.get('/getUsers',auth,(req,res)=>{
//     console.log("object")
//     Users.find()
//     .sort({date: -1})
//     .then((data)=>res.json(data))
//     .catch(err=>res.status(404).json({succsss:false}));
// })

module.exports = router;