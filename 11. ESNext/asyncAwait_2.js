const gerarNumeros = (min, max, numerosProibidos) => {
    if (min > max) { 
        [min, max] = [max, min] // CORREÇÃO CASO USUARIO TROQUE OS VALORES
    }
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero proibido')
        }
        resolve(aleatorio)
    })
}

(async () => {
    try {
        let numero = await gerarNumeros(1,5,[1,2,4])
        console.log(numero);
    } catch (erro) {   
        console.error(erro);
    }
})()
