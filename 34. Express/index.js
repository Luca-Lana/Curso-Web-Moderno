const express = require('express')
const app = express() 

app.use((req, res) => {
    res.send('Esta safe manito')
})


app.listen(8080, () => {
    console.log('Servidor esta rodando')
})