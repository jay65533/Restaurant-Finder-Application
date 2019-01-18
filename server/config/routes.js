var restaurants = require('../controllers/mainController')

module.exports = function(app) {
    app.get("/restaurants", restaurants.index)
    app.get("/restaurants/:id", restaurants.show)
    app.post("/restaurants", restaurants.addRestaurant)
    app.post("/restaurants/reviews/:id", restaurants.addReviewToRestaurant)
    app.delete("/restaurants/:id", restaurants.deleteRestaurant)
    app.delete("/restaurants/reviews/:id", restaurants.deleteReview)
    app.post("/update/:id", restaurants.update)
}