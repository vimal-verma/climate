require('newrelic');
const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    res.send('hi this is vimal')
})

app.listen('5500',()=>{console.log("server is running at 5500")})