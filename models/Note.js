const mongoose=require('mongoose');
module.exports=mongoose.model('Note',new mongoose.Schema({
 title:String,
 content:String,
 userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
},{timestamps:true}));
