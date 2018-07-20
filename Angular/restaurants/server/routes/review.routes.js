const { reviewController } = require('../controllers');

//non barrel version
// const noteController = require('../controllers/note.controller');

const router = require('express').Router()

router
  .get('/', reviewController.index)
  .get('/:review_id', reviewController.show)
  .post('/', reviewController.create)
  .put('/:review_id', reviewController.update)
  .delete('/:review_id', reviewController.destroy)

module.exports = router;
