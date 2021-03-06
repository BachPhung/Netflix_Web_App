const listRoute = require('express').Router()
const List = require('../models/List')
const Movie = require('../models/Movie')
const verify = require('../verifyToken')

//CREATE
listRoute.post("/",verify ,async (req,res)=>{
    if(req.user.isAdmin){
        const newList = new List(req.body)
        try{
            const savedList = await newList.save();
            res.status(200).json(savedList)
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
listRoute.delete("/:id",verify ,async (req,res)=>{
    if(req.user.isAdmin){
        try{
            await Movie.findOneAndDelete(req.params.id);
            res.status(200).json('Deleted list successfully')
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
listRoute.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
      if (typeQuery) {
        if (genreQuery) {
          list = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery, genre: genreQuery } },
          ]);
        } else {
          list = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery } },
          ]);
        }
      } else {
        list = await List.aggregate([{ $sample: { size: 10 } }]);
      }
      res.status(200).json(list);
    } catch (err) {
      res.status(501).json(err);
    }
  });
module.exports = listRoute;