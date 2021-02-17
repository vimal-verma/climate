require('newrelic');
const express = require('express');
var path = require('path');

const app = express()
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'public'));

app.get('/',(req,res)=>{
    res.render('index')
})



app.get('/about', (req, res) => res.render('about'));



app.get('*', (req, res)=> res.redirect('/'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));