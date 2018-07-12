const Bicycle = require('mongoose').model('Bicycle');

module.exports = {

  //get all of resource
  index(request, response){
    Bicycle.find({})
      .then(bicycles => response.json(bicycles))
      .catch(console.log)
  },

  //get single resource
  show(request, response) {
    Bicycle.findById(request.params.bicyle_id)
      .then(bicycle => response.json(bicycle))
      .catch(console.log);
  },

  // create resource
  create(request, response){
    Bicycle.create(request.body)
      .then(bicycle => response.json(bicycle))
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
    Bicycle.findByIdAndUpdate(request.params.bicycle_id, request.body, { new: true })
      .then(bicycle => response.json(bicycle))
      .catch(console.log);
  },

  //delete resource
  destroy(request, response){
    Bicycle.findByIdAndRemove(request.params.bicycle_id)
      .then(bicycle => response.json(bicycle))
      .catch(console.log);

  },
}
