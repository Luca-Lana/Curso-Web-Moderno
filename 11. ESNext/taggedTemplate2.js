function real (partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

let preco = 29.9
let precoParcela = 11

console.log(real `1x de ${preco} ou 3x de ${precoParcela}`);