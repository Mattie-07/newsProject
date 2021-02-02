const express = require("express");
const router = express.Router();
const axios = require('axios');
const authReq = require('../auth');



//universal--------------------------
const api = `7235e9c528744dd09cfafa0d2cc35723`;
const date = new Date(); //goes for bit coin below....
const searchEngine = document.querySelector('.search');
const input = document.querySelector('.input');
const newsReturn = document.querySelector('.news-return');
searchEngine.addEventListener('submit', retrieve);

// ------------------search API --------------------------------------------------
function retrieve(e){
    if(input.value == ''){
        alert('Input field is empty!')
        return
    }

    newsReturn.innerHTML = '';
    e.preventDefault();
    let topic = input.value;

    let urlToImage = `http://newsapi.org/v2/everything?q=${topic}&apiKey=${api}`
    //ADD AUTHOR/URL----------------********
    fetch(urlToImage).then((res)=>{
        return res.json()
               //return response in JSON format
    })
    .then((data)=>{
        console.log(data)
        data.articles.forEach(article =>{
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', data)
            a.setAttribute('target', '_blank');
            a.textContent = article.urlToImage;  //what would i do instead of textContent??
            li.appendChild(a);
            newsReturn.appendChild(li);
        })
    }).catch((error)=>{
        console.log(error)
    });
}
//----------Top Headlines-----------------------------------
let headlines = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}`
fetch(url, urlToImage).then((res)=>{
    return res.json()
})


    
//--------------------------------BITCOIN-----------------------------------------             
                //fetching the imges & author/title
                fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=${date}&sortBy=publishedAt&apiKey=${api}`)
//Matthew C's code ----------------------
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    news = data.articles[0].title;
                    image = data.articles[0].urlToImage;
                    console.log(news)
    
                    let h1 = document.querySelector('h1');
                    h1.textContent = `The title is: ${news}`;
                    let img = document.querySelector('img');
                    img.src = image;
                })
                .catch((error)=>{
                    console.log(error)
                })
                //---------------------------------------------
//Kanny's code below ------------------------------------
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let htmlArr1 = data.articles.map(obj =>{
                        return `li ${obj.author}, ${obj.title} </li>`
                    })
                    let ul = document.querySelector('ul');
                    ul.innerHTML = htmlArr1.join('');
    
    
                    let htmlArr = data.articles.map(obj =>{
                        return `${obj.urlToImage}`
                    })
                    console.log(htmlArr);
                        let img1 = document.querySelector('#img1');
                        let img2 = document.querySelector('#img2');
                        let img3 = document.querySelector('#img3');
                        let img4 = document.querySelector('#img4');
                        let img5 = document.querySelector('#img5');
                        let img6 = document.querySelector('#img6');
                        
                        let img11 = document.createElement('img');
                        let img22 = document.createElement('img');
                        let img33 = document.createElement('img');
                        let img44 = document.createElement('img');
                        let img55 = document.createElement('img');
                        let img66 = document.createElement('img');
    
                        img11.src = htmlArr[0];
                        img22.src = htmlArr[1];
                        img33.src = htmlArr[2];
                        img44.src = htmlArr[3];
                        img55.src = htmlArr[4];
                        img66.src = htmlArr[5];
    
                        img1.appendChild(img11);
                        img2.appendChild(img22);
                        img3.appendChild(img33);
                        img4.appendChild(img44);
                        img5.appendChild(img55);
                        img6.appendChild(img66);
    
                })
//end Kanny's code ---------------------------------------------




//router -------------------------------------

router.get('/' , (req, res) =>{
    res.render('index2')
})





module.exports = router;