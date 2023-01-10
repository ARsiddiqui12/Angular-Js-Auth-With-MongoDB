

const express=require('express');

const Users = require('./mongodb/users');

const router=express.Router();

router.post("/check",(req,res)=>{
   
    UserName = req.body.userName;

    Password = req.body.password;

     Users.find({ username: req.body.userName,password:req.body.password}, function (err, docs) {

      
        if(docs.length > 0)
        {
            return res.json({code:200,isLoggedIn:true});
        }
        else
        {
            return res.json({code:404,isLoggedIn:false});
        }
       
               
    });
    
   
});
  
module.exports=router;