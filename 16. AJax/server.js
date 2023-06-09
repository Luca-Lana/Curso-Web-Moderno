const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')

const app = express()

// CONFIGURAÇÕES
app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload =  multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro')
        }
        return res.end('Concluido com sucessp')
    })
})

app.listen(8080, () => {
    console.log('Servidor rodando');
})