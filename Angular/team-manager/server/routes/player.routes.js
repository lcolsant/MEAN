const { playerController } = require('../controllers');

//non barrel version
// const noteController = require('../controllers/note.controller');

const router = require('express').Router()

router
  .get('/', playerController.index)
  .get('/:player_id', playerController.show)
  .post('/', playerController.create)
  .put('/:player_id', playerController.update)
  .delete('/:player_id', playerController.destroy)

module.exports = router;
