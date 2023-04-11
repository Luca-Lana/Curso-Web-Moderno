const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')

const app = express()

// CONFIGURAÇÕES
app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(8080, () => {
    console.log('Servidor rodando');
})