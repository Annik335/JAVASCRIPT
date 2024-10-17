//else-if - ok
//if -ok
//if-else - ok
//switch -ok

let nota1, nota2, media, faltas
nota1= 10
nota2= 5
faltas = 8
media = (nota1 + nota2) /2
// media >= 7 :) - 5
// media >= 7 :( - 5
// && ||
if (media >= 7 && faltas <= 5) {
    //true
    console.log(`o Jovem esta reprovado com a media ${media} e quantidade de ${faltas} faltas`);
    
} else {
    // false
    console.log(`O jovem está aprovado com a média ${media} e quantidade de ${faltas} faltas`);

}
console.log(`Fim`);