const express = require('express')

const app = express()

app.get('/', function (req, res) {
    console.log(`${req.ip}正在访问本网站`)
  res.send('<h1 style="color:pink">Hello World<h1/>')
})

app.listen(80)