// criar de forma literal
function fun1() { }

//armazenando em uma variavel

const fun2 = function () { }

// armazenar em um array

const array = [function (a, b) { return a + b}, fun1, fun2]

// armazenar em um atributo de objeto

const obj = {}
obj.falar  = function () { console.log('opa');}

//passar funcao como parametro para outra funcao
function run (fun) {
    fun()
}

// uma função pode retornar outra função
function soma (a,b) {
    return function (c) {
        return a + b + c
    }
}
