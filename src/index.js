const express = require('express');
const path = require('path');
//initialize
const app = express();
const p = 3000;
//settings
app.set('port', process.env.PORT || p);
//middleware

//routes

//static files
app.use(express.static(path.join(__dirname, 'public')));
//starting server
app.listen(app.get('port'),() => {;
  console.log('server on port ', p);
});
