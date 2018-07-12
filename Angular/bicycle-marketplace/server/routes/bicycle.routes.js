const { bicycleController } = require('../controllers');

//non barrel version
// const noteController = require('../controllers/note.controller');

const router = require('express').Router()

router
  .get('/', bicycleController.index)
  .get('/:bicycle_id', bicycleController.show)
  .post('/', bicycleController.create)
  .put('/:bicycle_id', bicycleController.update)
  .delete('/:bicycle_id', bicycleController.destroy)

module.exports = router;
