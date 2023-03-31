function lancarErro(msg) {
    throw new Error(msg)
}

function imprimirNomeGritando (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        lancarErro('Atributo name não identificado')
    } finally {
        console.log('Linha após todo código rodar')
    }
}
 
imprimirNomeGritando({nome: 'Luca'})