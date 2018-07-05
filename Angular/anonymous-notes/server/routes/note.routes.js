const { noteController } = require('../controllers');

//non barrel version
// const noteController = require('../controllers/note.controller');

const router = require('express').Router()

router
  .get('/', noteController.index)
  // .post('/', noteController.create)
  .post('/', function(req,res){
    console.log('got to note routes');
  })
  .delete('/:note_id', noteController.destroy)

module.exports = router;
