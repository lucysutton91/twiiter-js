const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );

});

router.get('/users/:name', function (req, res) {
    //req.params.name === /:name
    let name = req.params.name;
    let list = tweetBank.find( {name: name} ) ;
    // let list = tweetBank.find({name: req.params.name});
    res.render( 'index', { title: 'Twitter.js', tweets: list, showForm: true, name: req.params.name } );

});

router.get('/tweets/:id', function (req, res) {
  // let tweetId = parseInt(req.params.id, 10);
  let tweetId = +req.params.id;
  let list = tweetBank.find( {tweetId: tweetId} ) ;
  res.render( 'index', { tweets: list } );
});

router.post('/tweets', function(req, res) {
  let name = req.body.name;
  let text = req.body.text;
  tweetBank.add(name, text);
  // tweetBank.add(req.body.name, req.body.text);
  res.redirect('/');
});

module.exports = router;
