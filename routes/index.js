const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
  
});

router.get('/users/:name', function (req, res) {
    let name = req.params.name;
    let list = tweetBank.find( {name: name} ) ;
    res.render( 'index', { tweets: list, showForm: true } );
    //set the form's name field's value=name
    $("#name_field")
    let nameVal = document.getElementById('name_field');
    nameVal.value = name;
  });

router.get('/tweets/:id', function (req, res) {
  let tweetId = parseInt(req.params.id, 10);
  let list = tweetBank.find( {tweetId: tweetId} ) ;
  res.render( 'index', { tweets: list } );
});

router.post('/tweets', function(req, res) {
  let name = req.body.name;
  let text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
