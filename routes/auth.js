const router=require('express').Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/User');
const auth=require('../middleware/auth');

router.post('/register',async(req,res)=>{
 const {name,email,password}=req.body;
 const hash=await bcrypt.hash(password,10);
 res.json(await User.create({name,email,password:hash}));
});

router.post('/login',async(req,res)=>{
 const {email,password}=req.body;
 const user=await User.findOne({email});
 if(!user)return res.status(400).json({msg:'No user'});
 const ok=await bcrypt.compare(password,user.password);
 if(!ok)return res.status(400).json({msg:'Wrong pass'});
 res.json({token:jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})});
});

router.get('/me',auth,async(req,res)=>{
 res.json(await User.findById(req.user.id).select('-password'));
});
module.exports=router;
