const express = require('express')
const app = express() 

app.get('/cliente/:id', (req, res) => {
    return res.send(`Cliente número ${req.params.id}`)
})

app.listen(8080, () => {
    console.log('Servidor esta rodando')
})