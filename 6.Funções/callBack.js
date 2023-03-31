let fabricantes = ['Mercedes', 'BMW', 'Audi']

function imprimir (nome, indice) {
    console.log(`${indice}. ${nome}`);
}

fabricantes.forEach(imprimir)