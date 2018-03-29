const express = require('express');
const router = express()
const model = require('../models/index');

router.set("view engine", "ejs")

router.get('/', (req, res) => {

  res.render('homepage')

})

router.post('/', (req, res) => {

  const signup = {
    name: req.body.name,
    username: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    isLogin: "false"
  }

  model
    .User
    .create(signup)
    .then(response => res.redirect('/login'))
    .catch(err => console.log(err));

})

router.get('/login', (req, res) => {

  res.render('login')

})

router.post('/login', (req, res) => {

  model.User.findOne({where: {username: req.body.uname, password: req.body.psw, role: 'customer'}})
  .then((user) => {
    if (user != null) {

      user.update(isLogin = 'true',{where: {username: req.body.uname}})

      res.redirect('lists')
    }
  })

  model.User.findOne({where: {username: req.body.uname, password: req.body.psw, role: 'seller'}})
  .then((user) => {
    if (user != null) {
      res.redirect('seller')
    }
  })

  .catch(err => console.log(err))

})

router.get('/lists', (req, res) => {

  model
    .Book.findAll()
    .then(list => {
      res.render('lists', { list })
    })

})

router.get('/seller', (req, res) => {

  model
    .Book.findAll()
    .then(books_data => {
      res.render('seller', { books_data })
    })

})

router.get('/addbook', (req, res) => {

  res.render('add-book')

})

router.post('/addbook', (req, res) => {

  const book = {
    title: req.body.name,
    price: req.body.price,
    stock: req.body.stock
  }

  model.Book.create(book)
  .then(response => res.redirect('/seller'))

})

router.get('/seller/edit/:id', (req, res) => {

  model
    .Book
    .findById(req.params.id)
    .then(book => res.render('edit-book', {book:book}))

})

router.get('/seller/delete/:id', (req,res) => {
    model.Book.destroy({
        where: {
            id: req.params.id
        }}).then(() => {
            res.redirect('/seller');
        });
});

router.post('/seller/update', (req, res) => {

  const seller = {
    id: req.body.id,
    title: req.body.title,
    price: req.body.price,
    stock: req.body.stock
  }

  model
    .Book
    .update(seller, { where: { id: seller.id } })
    .then(response => res.redirect('/seller'))
    .catch(err => console.log(err));
});

router.post('/addtocart/:id', (req, res) => {

  const cart = {
    BookId: req.params.id,
    UserId: 0,
    TransactionId: 0,
    Qty:0
  }

  model.Chart.create(cart)

})

module.exports = router;
