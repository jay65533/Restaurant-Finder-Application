var mongoose = require("mongoose");

var ReviewSchema = mongoose.Schema({
    name: { type: String, required:true, minimum: 3},
    rating: {type: Number, required:true, minimum: 1, maximum: 5},
    comment: {type: String, required: true, minimum: 3}

})

var RestaurantSchema = mongoose.Schema({
    name: { type: String, required:true, minimum: 3},
    cuisine: {type: String, required: true, minimum: 3},
    review: {type:[ReviewSchema], required:false}
}, {timestamp: true})

var Restaurant = mongoose.model('Restaurant', RestaurantSchema)
var Review = mongoose.model('Review', ReviewSchema)

module.exports = {
    Restaurant:Restaurant,
    Review:Review
}