//   use Express
const { error } = require('console');
const express = require('express');
const app = express();



//  listen default on port (3000)
app.listen(3000);

// Reset viwe Engine

app.set('view engine' , 'ejs');
app.set('views' , 'pages');

// set Routing 
app.get('/' , (req , res) => {
    res.render('index');
})


