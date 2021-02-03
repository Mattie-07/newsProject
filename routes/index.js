const express = require("express");
const router = express.Router();
const axios = require('axios');
const authReq = require('../auth');



router.get('/' , (req, res) =>{
        res.render('index')
})

router.get('/protected', authReq, (req, res) => {
  console.log('authentiated');
  res.send('protected')
})


router.get('/error', (req, res)=>{
        res.send('error')
})



// const searchEngine = document.querySelector('.search');
// const input = document.querySelector('.input');
// const newsReturn = document.querySelector('.news-return');



// router.get('/logout', (req, res) => {
//   //session is cleared
//   req.logout();

//   res.redirect('/')
// })


//router.get('/logout', (req, res))

module.exports = router;
