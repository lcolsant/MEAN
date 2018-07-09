const { playerController } = require('../controllers');

//non barrel version
// const noteController = require('../controllers/note.controller');

const router = require('express').Router()

router
  .get('/', playerController.index)
  .post('/', playerController.create)
  .post('/', playerController.update)
  .delete('/:note_id', playerController.destroy)

module.exports = router;
