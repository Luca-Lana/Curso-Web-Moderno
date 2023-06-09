const sequence = {
    _id: 1,
    get() {
        return this._id++
    }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) {
        produto.id = sequence._id
    }
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = {
    salvarProduto,
    getProduto,
    getProdutos
}