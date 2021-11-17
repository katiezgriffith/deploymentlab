const express = require('express')
const path = require('path')

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'../index.html'));
})

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname, '../index.css'));
  
});

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname, '../client/images1.png'));
});

const port = process.env.PORT || 4004


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })