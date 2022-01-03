const movieRoute = require('express').Router()
const Movie = require('../models/Movie')
const verify = require('../verifyToken')

//CREATE
movieRoute.post("/",verify ,async (req,res)=>{
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body)
        try{
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie)
        }
        catch(err){
            res.status(500).json(err)
        }
    } else{
            res.status(403).json("You are not allowed")
        }
    }
)

//UPDATE
movieRoute.put("/:id",verify ,async (req,res)=>{
    if(req.user.isAdmin){
        try{
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updatedMovie)
        }
        catch(err){
            res.status(500).json(err)
        }
    } else{
            res.status(403).json("You are not allowed")
        }
    }
)

//DELETE
movieRoute.delete("/:id",verify ,async (req,res)=>{
    if(req.user.isAdmin){
        try{
            await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json('Deleted movie successfully')
        }
        catch(err){
            res.status(500).json(err)
        }
    } else{
            res.status(403).json("You are not allowed")
        }
    }
)

//GET
movieRoute.get("/find/:id",verify ,async (req,res)=>{
        try{
           const movie = await Movie.findById(req.params.id)
            res.status(200).json(movie)
        }
        catch(err){
            res.status(500).json(err)
        }   
    }
)

//GET RANDOM
movieRoute.get("/random",verify ,async (req,res)=>{
    const type = req.query.type
    let movie
    try{
       if(type==='series'){
          movie = await Movie.aggregate([
              {$match: {isSeries:true}},
              {$sample: {size:1}}
          ])
       } else {
            movie = await Movie.aggregate([
                {$match: {isSeries:false}},
                {$sample: {size:1}}
          ])
       }
       res.status(200).json(movie)
    }
    catch(err){
        res.status(500).json(err)
    }   
}
)

//GET ALL
movieRoute.get("/",verify ,async (req,res)=>{
    if(req.user.isAdmin)
    {try{
       const movies = await Movie.find()
        res.status(200).json(movies)
    }
    catch(err){
        res.status(500).json(err)
    }  } 
    else{
        res.status(403).json('You are not allowed to see all movies')
    }
}
)

module.exports = movieRoute;