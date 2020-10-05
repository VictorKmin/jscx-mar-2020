const express = require('express');
const expressHandlebars = require('express-handlebars');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');

const cronRun = require('./cron-jobs')
const {WHITE_LIST, ENV} = require('./configs/config')
const winston = require('./logger/winston');
const app = express();

dotenv.config()

const logger = winston('APP');

if (ENV === 'DEV') {
  app.use(cors());
  app.use(morgan('dev'));
} else {
  app.use(cors({
    origin: (origin, callback) => {
      if (WHITE_LIST.split(';').includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }))
}


const instance = require('./dataBase').getInstance();
instance.setModels();

app.use(fileUpload({}))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));
app.use(express.static(path.join(process.cwd(), 'public')));


app.set('view engine', '.hbs');
app.engine('.hbs', expressHandlebars({
  defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

mongoose.connect(encodeURI('mongodb://localhost/car_shop'), {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (args) => {
  console.log(args)
});

const apiRouter = require('./routes/api.router')

app.use('/api', apiRouter);

app.use('*', (err, req, res, next) => {
  logger.error(err);
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

  // cronRun();
  console.log('Server listening on 5000')
})


process.on('unhandledRejection', reason => {
  console.log('__________________________________________');
  console.log(reason);
  console.log('__________________________________________');

  process.exit(0);
})
