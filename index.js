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

  //acesso o item na lista baseado no ID recebido
  const item = lista[id]
  //envio o item obtido como resposta HTTP
  res.send(item)
})
//Sinaliza que o corpo da requisição está em JSON
app.use(express.json())

//Create -> [POST] /item
app.post('/item', function(req, res){
  //extraimos o corpo da requisiçao 
  const body = req.body

  //pegamos o nome (string) que foi enviado dentro do corpo
  const item = body.nome 
  
  //colocamos o nome dentro da lista de itens
  lista.push(item)

  //enviamos uma resposta de sucesso
  res.send('Item adicionado com sucesso!')
})

app.listen(3000)
