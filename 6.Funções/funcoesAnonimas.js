let soma = (a, b) => a + b

const resolverCalculo = (a, b, operacao = soma)  => {
    console.log(operacao(a, b));
}

resolverCalculo(2, 2)
resolverCalculo(2, 2, (a,b) => a - b)