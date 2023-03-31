const pessoa = function ( nome = '') {
    this.nome = nome

    this.falar = function () {
        console.log('Oi meu nome é '+ nome);
    }
}

let pessoa1 = new pessoa('Jose')

pessoa1.falar()