const express = require('express');
const app = express();
const PORT = 3000

//ejs
app.set('view engine', 'ejs');

//public
app.use(express.static('public'))

//route references
app.use(require('./routes/index'))
app.use(require('./routes/registration'))



app.listen(PORT, () => {
  
    console.log(`listening on port ${PORT}`);
})
//npm install body-parser