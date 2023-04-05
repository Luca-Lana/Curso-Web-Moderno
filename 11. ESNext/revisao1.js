// let const 
{
    var a = 1
    let b = 2 // TEM ESCOPO DE BLOCO
    console.log(b);
}
console.log(a);

// TEMPLATE STRING
let produto = 'Ipad'
console.log(`${produto} é caro dms!`)


// DESCTRUCTURING
let {nome, idade} = {nome: 'Luca', idade: 22}
console.log(nome, idade);
let [num1, num2] = [1,2]
console.log(num1, num2);
let [valor1, valor2, ...resto] = [23, 24, 345, 45, 454] // OPERADOR spred(...) VAI JUNTAR O RESTO EM UM ARRAY
console.log(resto);