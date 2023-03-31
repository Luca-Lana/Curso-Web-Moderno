function soma () {
    let soma = 0
    for (e in arguments) {
        soma += arguments[e]
    }
    console.log(soma)
}
soma (2,23,4,5)