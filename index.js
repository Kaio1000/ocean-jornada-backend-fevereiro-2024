const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/oi", function (req, res) {
    res.send("Olá Mundo!")
})

// Lista de Personagens
const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

// Read All -> [GET] /item
app.get('/item', function (req, res) {
  res.send(lista)
})

// Read By ID -> [GET] /item/:id
app.get('/item/:id', function (req, res) {
  const id = req.params.id

  const item = lista[id]
  res.send(item)
})

app.listen(3000)
