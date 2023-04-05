const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')
const app = express()

const porta = 3003
app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) 
})

app.get('/produtos/:id', (req, res, next) => {
    let {id} = req.params
    res.send(bancoDeDados.getProduto(id))
})

app.post('/produtos', (req, res, next) => {
    let {nome, preco} = req.body
    const produto = bancoDeDados.salvarProduto({
        nome,
        preco
    })
    res.send(produto) 
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
})