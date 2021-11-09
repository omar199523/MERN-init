const mongoose =require('mongoose')
const Schema = mongoose.Schema;

// ceate shcema

const ItemSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:new Date
    }
})
module.exports =Item =mongoose.model('item',ItemSchema)