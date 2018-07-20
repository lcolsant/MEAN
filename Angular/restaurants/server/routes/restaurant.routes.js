const { restaurantController } = require('../controllers');

//non barrel version
// const noteController = require('../controllers/note.controller');

const router = require('express').Router()

router
  .get('/', restaurantController.index)
  .get('/:restaurant_id', restaurantController.show)
  .post('/', restaurantController.create)
  .put('/:restaurant_id', restaurantController.update)
  .delete('/:restaurant_id', restaurantController.destroy)

module.exports = router;
