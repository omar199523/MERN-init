const express =require('express');
const Person = require('../../models/persons');
const router = express.Router();
const auth = require('../../middelwaer/auth')
const authAdmin = require('../../middelwaer/admin')


// users model
const Persons = require('../../models/persons');
const persons = require('../../models/persons');
//  @route get api/persons
// @ desc get all person
// @access puplic
router.get('/',authAdmin,(req,res)=>{
    Person.find()
    .sort({date: -1})
    .then((data)=>res.json(data))
    .catch(err=>res.status(404).json({msg:false}));
})
router.get('/myData/:id',auth,(req,res)=>{
    Persons.find({userAddedId:req.params.id})
    .sort({date: -1})
    .then((data)=>res.json(data))
    .catch(err=>res.status(404).json({msg:false}));
})

//  @route post api/persons/add
// @ desc creat a post
// @access private
router.post('/add',auth,(req,res)=>{
    const newPerson = new Person({...req.body});
    newPerson.save()
    .then(person => res.json({...person._doc}))
    .catch ((err)=>{res.status(404).json({success:false,msg:"add faill!"})})
})

//  @route Edit api/persons/edit
// @ desc Edit a post
// @access private
router.post('/edit',auth,async (req,res)=>{
    // const person = Persons.findOne({_id:req.body._id});
    // console.log(person)
    const {_id} = req.body;
    Persons.findOneAndUpdate({_id},{...req.body},{returnOriginal: false})
    .then(data => res.json(data))
    .catch((err)=> res.status(404).json({succsss:false}))
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
