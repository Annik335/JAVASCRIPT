//if -ok
//if-else - ok
//else-if - ok
//switch - ok
let nota1, nota2, media, faltas
nota1 = 6.8;
nota2 = 6.8;
faltas = 9;
media = 3

if (media >= 7 && faltas < 6) {
    //true
    console.log(`Aluno Aprovado`);

} else if (media >= 6.5 && faltas <= 5) {
    console.log(`Aluno Ap. Conselho`);

} else if (media > 6 && faltas < 6) {
    console.log(`Atividade de rep. ${media}`);
    media += 0.5
    console.log(media);
} else {
    console.log(`Aluno Reprovado`);
}

//   &&                    ||
// v + v = v              
//v + f = f
// f + v = f
// f + f = f