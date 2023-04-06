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

// RECURSO DO ES8 
// SIMPLIFICAR O CÓDIGO ASSINCRONO

(async () => {
    let ta = await getTurma('A')
    let tb = await getTurma('B')
    let tc = await getTurma('C')
    return [...ta.map(a => `A: ${a.nome}`), ...tb.map(a => `B: ${a.nome}`), ...tc.map(a => `C: ${a.nome}`)]
})().then(alunos => console.log(alunos))

