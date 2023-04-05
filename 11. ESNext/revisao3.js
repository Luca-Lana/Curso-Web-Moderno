// ES8 Object.values// Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

// MELHORIAS NA NOTAÇÃO LITERAL
let nome = 'Jose'
let pessoa = {
    nome,
    ola() {
        return 'Oi gente'
    }
}

console.log(pessoa.ola());

//CLASS
class Animal {}

class Cachorro extends Animal {

    falar() {
        return 'au aua au'
    }
}

console.log(new Cachorro().falar());