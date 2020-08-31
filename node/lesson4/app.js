const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const app = express();

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

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Server listening on 5000')
})
