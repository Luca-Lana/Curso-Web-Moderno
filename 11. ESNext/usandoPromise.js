// COM PROMISE
const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
    
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turmas =>{
    let nomes = []
    turmas.forEach((turma, indice) => {
        let nomeTurmas = ['A', 'B', 'C']
        nomes = nomes.concat(turma.map(aluno => `${nomeTurmas[indice]}: ${aluno.nome}`))
    })
    console.log(nomes);
})

