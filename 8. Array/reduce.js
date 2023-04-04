//VAI JUNTAR TODOS OS NUMEROS

const notas = [10.0, 10, 10]

const total = notas.reduce(function(total, nota) {
    return total + nota
})

console.log(total);