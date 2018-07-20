
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const port = process.env.PORT || 8000;
const app = express();


require('./server/config/database');

app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, './dist/restaurants')))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.route'));

app.listen(port, ()=> console.log(`Express server listening on port ${port}`));
