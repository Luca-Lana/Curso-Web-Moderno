const fs = require('fs')

const lerArquivo = (nomeArquivo) => {
    return new Promise((resolve, reject) => {
        let conteudo = fs.readFileSync(__dirname + '/' + nomeArquivo, 'utf-8')
        resolve(conteudo)
    })
}

lerArquivo('dados.txt').then(conteudo => console.log(conteudo))

// FORMA DE RESOLVER FEITO NO CURSO

const lerArquivoCurso = (nomeArquivo) => {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/'+ nomeArquivo, 'utf-8', (erro, data) => {
            resolve(data)
        })
    })
}

lerArquivoCurso('dados.txt').then(conteudo => console.log(conteudo))