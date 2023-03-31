function passouDeAno(nota) {
   
    switch (true) {
        case nota <= 10 && nota > 5:
            console.log('Aprovado')
            break;
        case nota <= 5 && nota > 3:
            console.log('Recuperação');
            break;
        case nota <= 3 && nota >= 0:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota invalida')
            break;
    }
    
}

passouDeAno(2)
