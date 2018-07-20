const Review = require('mongoose').model('Review');

module.exports = {

  //get all of resource
  index(request, response){
    Review.find({})
      .then(review => response.json(review))
      .catch(console.log)
  },

  //get single resource
  show(request, response) {
    Review.findById(request.params.review_id)
      .then(review=> response.json(review))
      .catch(console.log)
  },

  // create resource
  create(request, response){
    Review.create(request.body)
      .then(review=> response.json(review))
      .catch(error => {
        response
          .status(500)
          .json(
            Object.keys(error.errors).map(key => error.errors[key])
          );
      })
  },

  //update resource
  update(request, response) {
    Review.findByIdAndUpdate(request.params.review_id, request.body, { new: true })
      .then(review=> response.json(review))
      .catch(console.log)
  },

  //delete resource
  destroy(request, response){
    Review.findByIdAndRemove(request.params.review_id)
      .then(restaurant=> response.json(review))
      .catch(console.log)

  },

}
