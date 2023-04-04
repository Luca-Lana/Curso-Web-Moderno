// 1

function cumprimentar (nome) {
    return `Olá, ${nome}!`
}

// 2

function diasVida (idade) {
    return idade * 365
}

// 3

function salarioMes (horasTrabalho, valorHora) {
    return `Salário igual a R$${horasTrabalho * valorHora}`
}

// 4
function qualMes(numeroMes) {
    switch (numeroMes) {
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
    }
}

//5

function maiorOuIgual (numero1, numero2) {
    return numero1 === numero2 || numero1 > numero2
}
