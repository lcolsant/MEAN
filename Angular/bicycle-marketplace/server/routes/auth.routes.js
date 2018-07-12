const { authController } = require('../controllers');
const router = require('express').Router();

router
  .post('/login', authController.login)
  .post('/register', authController.register)
  .delete('/logout', authController.logout)

module.exports = router;
