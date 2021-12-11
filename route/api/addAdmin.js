const bcrypt = require('bcryptjs');
const config = require('config');
const jwt =require('jsonwebtoken')
const Users = require('../../models/user');

module.exports = function addAdmin(email){
    User.findOne({email})
    .then(user =>{
        console.log("admin added")
        if(user) throw "exit"
    })
    const newUser =new User({
        name:"Admin",
        email:"admin@info.in",
        password:"admin147852"
    })
    // create salt $ hach
    bcrypt.genSalt (10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
                .then(user=>{
                    jwt.sign(
                        {id:user.id},
                        config.get("jwtSecret"),
                        {expiresIn :3600},
                        (err,token)=>{
                            if(err) throw err;
                        }
                    )
                }).catch(err => console.log(err))
        })
    })
}
