const noteRoute = require('./note.routes')
const router = require('express').Router();
console.log('in routes',noteRoute);
module.exports = router.use('/notes', noteRoute)
