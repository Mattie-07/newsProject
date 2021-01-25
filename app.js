const express = require('express');
const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());


//views 
app.set('view engine', 'ejs');

//public folder
app.use(express.static('public'));



app.use(require('./routes'));
app.use(require('./routes/registration'));
app.use(require('./routes/login'));


app.listen(3000, () => {

    console.log('listening on port 3000');
}) 