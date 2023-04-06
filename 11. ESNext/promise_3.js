const gerarNumeros = (min, max) => {
    if (min > max) { 
        [min, max] = [max, min] // CORREÇÃO CASO USUARIO TROQUE OS VALORES
    }
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

gerarNumeros(10, 10).then(numero => console.log(numero))
