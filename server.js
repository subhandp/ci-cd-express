const express = require('express')
const app = express()
const {greeting} = require('./user')

app.get('/devops', (req,res) => res.send('devops start journey at 19/03/2023'))
app.get('/baru', (req,res) => res.send('Hello, barux!'))
app.get('/', (req,res) => res.send('This App is running properly!'))
app.get('/ping', (req,res) => res.send('Pong!'))
app.get('/youtube', (req,res) => res.send('Hello, youtube indonesia!'))
app.get('/hello/:name', (req,res) => {
    res.json({message:greeting(req.params.name)})
})
module.exports = app
