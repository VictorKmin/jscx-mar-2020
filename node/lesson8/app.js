const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

dotenv.config()

const instance = require('./dataBase').getInstance();
instance.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));


app.set('view engine', '.hbs');
app.engine('.hbs', expressHandlebars({
  defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

const apiRouter = require('./routes/api.router')

app.use('/api', apiRouter);

app.use('*', (err, req, res, next) => {
  res
      .status(err.status || 404)
      .json({
        message: err.message || 'NOT FOUND',
        code: err.customCode || ''
      })
})

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Server listening on 5000')
})


process.on('unhandledRejection', reason => {
  console.log('*************************');
  console.log(reason);
  console.log('*************************');

  process.exit(0);
})
