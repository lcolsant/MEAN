
const Player = require('mongoose').model('Player');

module.exports = {

  //get all of resource
  index(request, response){
    Player.find({})
      .then(players => response.json(players))
      .catch(console.log)
  },

  //get single resource
  show(request, response) {
    Player.findById(request.params.player_id)
      .then(player => response.json(player))
      .catch(console.log);
  },

  // create resource
  create(request, response){
    console.log('in controller...', request.body)
    Player.create(request.body)
      .then(player => response.json(player))
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
    Player.findByIdAndUpdate(request.params.player_id, request.body, { new: true })
      .then(player => response.json(player))
      .catch(console.log);
  },

  //delete resource
  destroy(request, response){
    Player.findByIdAndRemove(request.params.player_id)
      .then(player => response.json(player))
      .catch(console.log);

  },
}
