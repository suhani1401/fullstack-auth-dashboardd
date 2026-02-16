const router=require('express').Router();
const Note=require('../models/Note');
const auth=require('../middleware/auth');

router.get('/',auth,async(req,res)=>res.json(await Note.find({userId:req.user.id})));
router.post('/',auth,async(req,res)=>res.json(await Note.create({...req.body,userId:req.user.id})));
router.delete('/:id',auth,async(req,res)=>{await Note.findByIdAndDelete(req.params.id);res.json({msg:'deleted'});});

module.exports=router;
