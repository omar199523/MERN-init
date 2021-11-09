const express =require('express');
const item = require('../../models/item');
const router = express.Router();


// users model
const Items = require('../../models/item')
//  @route get api/items
// @ desc get all item
// @access puplic
router.get('/',(req,res)=>{
    Items.find()
    .sort({date: -1})
    .then((data)=>res.json(data))
    .catch((err=>console.log(err)));
})

//  @route post api/items/add
// @ desc creat a post
// @access puplic
router.post('/add',(req,res)=>{
    const newItem = new Items({
        name :req.body.name
    });
    newItem.save().then(item => res.json(item))
})
//  @route delete api/items/:id
// @ desc delete a post
// @access puplic
router.delete('/delete/:id',(req,res)=>{
    Items.findById(req.params.id)
    .then(item=>item.remove().then(()=> res.json({succsss:true})))
    .catch(err=>res.status(404).json({succsss:false}))
    
})
module.exports = router;