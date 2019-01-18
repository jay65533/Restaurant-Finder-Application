const mongoose = require('mongoose')
var model = require('../models/restaurant')
var Restaurant = model.Restaurant

module.exports = {
    index: function(req,res) {
        Restaurant.find({},(err,data) =>{
            if(err) {
                res.json(err)
            } else {
                res.json({message: 'Success', data: data});
            }
        })
    },

    addRestaurant: function(req,res) {
        Restaurant.findOne({name:req.body.name, cuisine:req.body.cuisine},(err,data) =>{
            if(data != null){
                res.json({message: 'Restaurant with that name already exists'});
            } else {
                Restaurant.create(req.body, (err, data) =>{
                    if(err){
                        res.json(err)
                    } else {
                        res.json({message: 'Success', data: data})
                    }
                })
            }
        })
    },

    show: function(req,res) {
        Restaurant.findById(req.params.id, function(err,data){
            if(err){
                res.json(err)
            } else {
                res.json({message: 'Success', data: data})
            }
        })
        
    },

    addReviewToRestaurant: function(req,res) {
        Restaurant.findById(req.params.id, function(err,data){
            if(err) {
                res.json({message: "Error", error: err})
            } else {
                console.log(data)
                data.review.push(req.body);
                console.log(data)
                data.save()
                res.json({message: "Successfully added a review"})
            }
        })
    },

    deleteRestaurant: function(req,res) {
        Restaurant.findByIdAndDelete(req.params.id, function(err,data) {
            if(err) {
                res.json({message: "Error", error: err})
            } else {
                res.json({message: "Successfully deleted"})
            }
        })
    },

    deleteReview: function(req,res){
        console.log(req.headers.referer.substring(34,req.headers.referer.length))
        console.log(req.params.id)
        Restaurant.findById(req.headers.referer.substring(34,req.headers.referer.length), function(err,data){
            if(err) {
                res.json({message: "Error", error: err})
            } else {
                //console.log(movie)
                for(var i = 0; i < data.review.length; i++){
                    if(data.review[i]._id == req.params.id){
                        data.review.pop()
                    }
                }
                //console.log(movie.review[0]._id)
                data.save()
                res.json({message: "Deleted the review"})
            }
        })
    },

    update: function(req,res){
        //console.log("dfsdfdsffDSfsdf")
        //console.log(req.params.id)
        //console.log(req.body.title)
        Restaurant.update({_id: req.params.id, name: req.body.name, cuisine: req.body.cuisine}, function(err,data){
          if(err){
            console.log('something went wrong');
            res.json({message: "Error", error: err})
          } else {
            res.json({message: "Success", data:data})
          }
        })
      },

}