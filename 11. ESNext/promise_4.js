const gerarNumeros = (min, max, tempo) => {
    if (min > max) { 
        [min, max] = [max, min] // CORREÇÃO CASO USUARIO TROQUE OS VALORES
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

// SE EU QUISER RODAR VARIAS PROMISES E SO RECEBER O THEN DPS Q TODAS ESTIVEREM PRONTAS

Promise.all([gerarNumeros(1,5,2000), gerarNumeros(1,56,2000), gerarNumeros(15,57,2000), gerarNumeros(15,54,2000)])
.then(numeros => console.log(numeros))