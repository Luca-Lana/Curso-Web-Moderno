const fs = require('fs')
// LENDO ARQUIVOS
let caminho = __dirname + '/arquivo.json'
let resultado = fs.readFileSync(caminho, 'utf-8')
console.log(resultado);
fs.readFile(caminho, 'utf-8', (erro, resultado) => {
    console.log(resultado);
})

//LENDO PASTAS

console.log(fs.readdir(__dirname, (erro, conteudo) => {
    console.log(conteudo);
}))