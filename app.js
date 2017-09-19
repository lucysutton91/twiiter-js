const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');

let locals = {
    title: 'Twitter Template',
    people: [
        {name: 'Pat'},
        {name: 'Lucy'}
    ]
};

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    if (err) throw err;
    console.log(output);
});

app.listen(3000, function () {
    console.log('server listening')
});

app.use('/', routes);
app.use(express.static('public'))

