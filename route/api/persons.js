const express =require('express');
const item = require('../../models/person');
const router = express.Router();
const auth = require('../../middelwaer/auth')


// users model
const Persons = require('../../models/person')
//  @route get api/persons
// @ desc get all person
// @access puplic
router.get('/',auth,(req,res)=>{
    Persons.find()
    .sort({date: -1})
    .then((data)=>res.json(data))
    .catch((err=>console.log(err)));
})

//  @route post api/persons/add
// @ desc creat a post
// @access private
router.post('/add',auth,(req,res)=>{
    const newPerson = new persons(req.body);
    newPerson.save().then(person => res.json(person))
})
//  @route delete api/persons/:id
// @ desc delete a post
// @access private
router.delete('/delete/:id',auth,(req,res)=>{
    Persons.findById(req.params.id)
    .then(person=>person.remove().then(()=> res.json({succsss:true})))
    .catch(err=>res.status(404).json({succsss:false}))
    
})
module.exports = router;