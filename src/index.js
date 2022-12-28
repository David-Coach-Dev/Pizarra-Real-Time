const express = require('express');
//initialize
const app = express();
const port = 3000;
//settings
app.set('port', process.env.PORT || port);
//middleware

//routes

//static files

//starting server
app.listen(app.get('port'));
console.log('server on port ', port);
