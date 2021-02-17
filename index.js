require('newrelic');
const express = require('express');

const app = express()
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})



app.get('/contact', (req, res) => res.send('Contact Page Route'));



app.get('*', (req, res)=> res.redirect('/'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));