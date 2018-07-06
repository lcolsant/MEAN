const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');
const routes = require('./server/routes');

app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, './dist/anonymous-notes')))
  // .use(function(request, response, next){
  //   console.log('got here middleware');
  //   console.log(request.url);
  //   next();
  // })
   .use('/api', routes)
  .use(require('./server/routes/catch-all.route'));

app.listen(port, ()=> console.log(`Express server listening on port ${port}`));
