function passouDeAno(nota) {
   
    if (nota >= 6 && nota <= 10) {
        console.log('Aprovado');
    } else if (nota < 6 && nota > 4) {
        console.log('Recuperação');
    } else if (nota < 4) {
        console.log('Reprovado');
    } else {
        console.log('Nota invalida');
    }
    
}

passouDeAno(123)
