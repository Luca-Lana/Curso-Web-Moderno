const esperaPor = (tempo = 2000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Executando callback');
            resolve()
        }, tempo)
    })
}

(async () => {
    await esperaPor();
    await esperaPor();
    await esperaPor();
    return 10
})().then(console.log)