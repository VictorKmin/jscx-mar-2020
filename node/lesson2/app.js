const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));



let arr = [
  {name: "Dima", age: 22},
  {name: "Inna", age: 33}
]
// let arr = [
//   "Dima",
//   "Inna"
// ]


app.set('view engine', '.hbs');
app.engine('.hbs', expressHandlebars({
  defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res) => {
  // console.log(req);
  // res.write('dsadadsad');
  // res.end('ALL RIGHT')
  // res.json('From JSON');
  // res.status(403).end('fdf');
  // res.sendStatus(400);

  res.render('main', {xxx: 'PRIVET CHATIK', isFine: true})
});

app.get('/render-register', (req, res) => {
  res.render('register')
})

app.post('/reg', (req, res) => {
  console.log('__________________');
  console.log(req.body);
  console.log('__________________');

  // res.end('OK')
  res.redirect('/users')
})

app.get('/users', (req, res) => {
  // res.json([
  //     {name: "Dima"},
  //     {name: "Inna"}
  //   ])

  res.render('users', { arr })
});

app.post('/users', (req, res)=> {
  console.log(req.body);

  res.end('Users created');
})


app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Server listening on 5000')
})
