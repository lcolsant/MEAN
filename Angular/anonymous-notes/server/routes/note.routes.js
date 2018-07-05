const { noteController } = require('../controllers');

//non barrel version
// const noteController = require('../controllers/book.controller');

const router = require('express').Router()

router
  .get('/', noteController.index)
  .post('/', noteController.create)
// .get('/:note_id', noteController.show)
// .put('/:note_id', noteController.update)
  .delete('/:note_id', noteController.destroy)

module.exports = router;
