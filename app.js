const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//logs the request
let logger = morgan('dev');
app.use(logger);

// let locals = {
//     title: 'Twitter Template',
//     people: [
//         {name: 'Pat'},
//         {name: 'Lucy'}
//     ]
// };

//nunjucks boilerplate
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
// nunjucks.render('index.html', locals, function (err, output) {
//     if (err) throw err;
//     console.log(output);
// });

app.listen(3000, function () {
    console.log('server listening')
});

//body parsers

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//any / req will be forwarded to the route handler in index.js
app.use('/', routes);

//static routing middleware to public file, which has our .css file
//to style all of the pages as they are requested
//the typical way to use express static middleware
//app.use(express.static('./public'))
app.use(express.static('public'))

