const restaurantRoutes = require('./restaurant.routes');
const reviewRoutes = require('./review.routes');

const router = require('express').Router();

//   /api/reviews/...
//   /api/restaurants/...

module.exports = router.use('/reviews', reviewRoutes).use('/restaurants', restaurantRoutes)
