const funcionarOuNao = (chanceErro) => {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Deu erro percerin')
        }
        resolve('Deu certo parcerin')
    })
}

funcionarOuNao(0.7).then(dado => console.log(dado)).catch(erro => console.log(erro))

// SE EU TRATAR ALGUM ERRO ESPECIFICO DENTRO DA FUNÇÃO THEN ELE NÃO VAI CHAMAR O CATCH
funcionarOuNao(0.7).then(dado => console.log(dado), erro => console.log('AA ' + erro)).catch(erro => console.log(erro)) 