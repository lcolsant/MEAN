const Note = require('mongoose').model('Note');

module.exports = {

  //get all of resource
  index(request, response){
    Note.find({})
      .then(notes => response.json(notes))
      .catch(console.log)
  },

  // create resource
  create(request, response){
    console.log('in controller...', request.body)
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

  destroy(request, response){
    Note.findByIdAndRemove(request.params.note_id)
      .then(note => response.json(note))
      .catch(console.log);

  },
}
