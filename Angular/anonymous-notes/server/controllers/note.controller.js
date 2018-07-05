const Note = require('mongoose').model('Note');

module.exports = {
  //get all of resource
  index(req, res){
    Note.find({})
      .then(notes => response.json(notes))
      .catch(console.log)
  },
  // create resource
  create(req, res){
    Note.create(request.body)
      .then(note => response.json(note))
      .catch(error => {
        response
          .status(500)
          .json(
            Object.keys(error.errors).map(key => error.errors[key])
          );
      })
  },
  // // get a single resource
  // show(req, res){},
  // // update a resource
  // update(req, res){},
  // destroy a resource
  destroy(req, res){
    Note.findByIdAndRemove(request.params.note_id)
      .then(note => response.json(note))
      .catch(console.log);

  },
}
