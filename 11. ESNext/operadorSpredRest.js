// OPERADOR ... REST(JUNTAR)/SPREAD(ESPALHAR)


//usar spred com objetos
let a = {
    nome: 'Teste',
    salario: 123
}

let clone =  {
    ativo: true,
    ...a // spred para copiar coisas de objetos
}  

console.log(clone);

// USER SPREAD COM ARRAY

let nomes = ['jose', 'pedrin', 'Mario']
let grupoFinal = ['Teste', ...nomes]
console.log(grupoFinal);