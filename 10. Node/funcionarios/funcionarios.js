const axios = require('axios')

let url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

let chines = f => f.pais === 'China'
let mulher = f => f.genero === 'M'
let menorSalario = (f, fAtual) => (f.salario < fAtual.salario) ? f : fAtual

axios.get(url).then(response => {
    let funcionarios = response.data
    let resultado = funcionarios.filter(chines).filter(mulher).reduce(menorSalario)
    console.log(resultado);
})