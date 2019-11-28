
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5050;


app.use(express.static('public'));

// Setup EJS
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');



app
    .get('/', (req, res)=> {
        res.render('index');
    })

    .listen(PORT, ()=> {
        console.log('App listening on port ' + PORT);
    })