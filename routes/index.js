const express = require('express');
const router = express()
const model = require('../models/index');

router.set("view engine", "ejs")

router.get('/', function (req, res) {

  // model.User.findAll()
  // .then(user => {
    res.render('homepage')
  // })

})

router.post('/', (req, res) => {

  const signUp = {
    name: req.body.name,
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  }

  model.User.create(signUp).then(response => res.redirect('/login'))
  .catch(err => console.log(err));

})

router.get('/login', function (req, res) {

  res.render( "login" )

})

module.exports = router;
