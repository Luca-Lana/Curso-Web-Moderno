// FILTRAR OS DADOS DE UM ARRAY
const produtos = [
    { nome: 'Notebook', preco: 2333},
    { nome: 'Caneta', preco: 4},
    { nome: 'Moto bis', preco: 5576},
    { nome: 'Casa', preco: 1000000},
]

const resultado = produtos.filter(function(produto) {
    return (produto.preco > 5000)
})
console.log(resultado);