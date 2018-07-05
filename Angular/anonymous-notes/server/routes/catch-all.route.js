const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response){
  // response.sendFile(path.resolve('dist/index.html'));
  response.sendFile(path.resolve('dist/anonymous-notes/index.html'));
  // response.sendFile(path.join(__dirname,'../../dist/anonymous-notes/index.html'));
});

module.exports = router;
