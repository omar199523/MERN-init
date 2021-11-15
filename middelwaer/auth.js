const conFig = require('config');
const jwt = require('jsonwebtoken');
const router = require('../route/api/users');

function auth(req,res,next){
    const token = req.header('x-auth-thoken')
    if(!token) res.status(401).json({msg:"No token, authorization denied"});
    try {
        const decoded = jwt.verify(token,config.get('jwtSecret'))
       // add user from payload
       req.user = decoded;
       next();

    }catch(e){
        res.status(400).json({mas:"Token is not valid"})
    }
}



module.exports = auth

