setTimeout(() => {
    console.log('Executando callback 1');

    setTimeout(() => {
        console.log('Executando callback 1');

        setTimeout(() => {
            console.log('Executando callback 1');

        }, 2000)
    }, 2000)
}, 2000)

const esperaPor = (tempo = 2000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Executando callback 2');
            resolve()
        }, tempo)
    })
}

esperaPor().then(esperaPor).then(esperaPor)