const fs = require('fs')

const lerArquivo = (nomeArquivo) => {
    return new Promise((resolve, reject) => {
        let conteudo = fs.readFileSync(__dirname + '/' + nomeArquivo, 'utf-8')
        resolve(conteudo)
    })
}


lerArquivo('dados.txt').then(conteudo => console.log(conteudo))