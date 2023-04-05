function falarDepois (segundos, frase) {
    return new Promise((resolve, reject) => { // O OBJETO PROMISE VAI RECEBER UMA FUNÇÃO ANONIMA
        setTimeout(() => {
            resolve(frase) // ACEITA APENAS UM PARAMETRO
        }, segundos * 1000)
    })
}

falarDepois(3, 'Que bacana!!').then((resultado) => {
    console.log(resultado);
})