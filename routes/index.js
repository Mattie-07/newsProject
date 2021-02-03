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


// ------------------search API --------------------------------------------------
// const searchEngine = document.querySelector('.search');
// const input = document.querySelector('.input');
// const newsReturn = document.querySelector('.news-return');

// searchEngine.addEventListener('submit', retrieve);

// function retrieve(e){

//     if(input.value == ''){
//         alert('Input field is empty!')
//         return
//     }

//     newsReturn.innerHTML = '';

//     e.preventDefault()

//     const apiKey = `7235e9c528744dd09cfafa0d2cc35723`
//     let topic = input.value;

//     let url = `http://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

//     fetch(url).then((res)=>{
//         return res.json()
//                //return response in JSON format
//     })
//     .then((data)=>{
//         console.log(data)
//         data.articles.forEach(article =>{
//             let li = document.createElement('li');
//             let a = document.createElement('a');
//             a.setAttribute('href', data)
//             a.setAttribute('target', '_blank');
//             a.textContent = article.url;  //what would i do instead of textContent??
//             li.appendChild(a);
//             newsReturn.appendChild(li);
//         })
//     }).catch((error)=>{
//         console.log(error)
//     });
// }

// console.log(topic);

// router.get('/logout', (req, res) => {
//   //session is cleared
//   req.logout();

//   res.redirect('/')
// })


//router.get('/logout', (req, res))

module.exports = router;
