const userRouter = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const verify = require('../verifyToken')


//UPDATE
userRouter.put("/:id",verify ,async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
            res.status(200).json(updatedUser)
        }
        catch(err){
            res.status(500).json(err)
        }
    } else{
        res.status(403).json("You can only update your account")
    }
})
//DELETE
userRouter.delete("/:id",verify ,async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Deleted user successfully!")
        }
        catch(err){
            res.status(500).json(err)
        }
    } else{
        res.status(403).json("You can only delete your account")
    }
})
//GET
userRouter.get("/find/:id",async (req,res)=>{
    try{
       const user = await User.findById(req.params.id)
       res.status(200).json(user) 
    } catch(err){
        res.status(500).json(err)
    }
})
//GET ALL
userRouter.get("/",verify ,async (req,res)=>{
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
            const users = query ? await User.find().sort({_id:-1}).limit(10): await User.find();
            res.status(200).json(users)
        }
        catch(err){
            res.status(500).json(err)
        }
    } else{
        res.status(403).json("You are not allowed to see all users")
    }
})
//GET USER STATS
userRouter.get('/stats', async (req,res)=>{
    try{
        const data = await User.aggregate([
            {
                $project:{
                    month: {$month: '$createdAt'}
                }
            },
            {
                $group:{
                    _id: '$month',
                    total: {$sum:1}
                }
            }
        ])
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = userRouter;