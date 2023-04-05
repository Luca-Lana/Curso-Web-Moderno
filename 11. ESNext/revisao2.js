// ARROW FUNCTTION
const soma = (a, b) => a + b
console.log(soma(1, 4));

// ARROW FUNCTION (THIS)
const lexico1 = () => console.log(this === exports);

//PARAMETROS DEFAULT
function aaa(nome = 'Node') {
    console.log(nome);
}

aaa()
aaa('Foi fio')

//OPERADOR REST
function total (...numeros) { // AQUI ESSE OPERADOR VAI JUNTAR TODOS OS PARAMETROS PASSADO EM UM ARRAY
    let total = 0
    numeros.forEach(num => total+= num)
    console.log(total);
}

total(1,2,3)