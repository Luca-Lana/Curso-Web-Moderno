// usando notação literal 
const obj1 = {}

// Object em JS
const obj2 = new Object()

// funcções contrutoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoDesconto = () => {
        return (preco * (1 - desc)).toFixed(2)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Noteboook', 2998.99, 0.25)

// função factory
function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7890, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
