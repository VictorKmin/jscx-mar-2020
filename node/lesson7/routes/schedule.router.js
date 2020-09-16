const {Router}  = require('express');
const schRouter = Router();

schRouter.get('/', (req, res)=> {
  res.end('SCH WORKING')
})

module.exports = schRouter;
