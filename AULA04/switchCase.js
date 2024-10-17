//else-if - ok
//if -ok
//if-else - ok
//switch - ok

// Otimo = 1
// Bom = 2
// Regular = 3
// Ruim = 4
// Pessimo = 5

let atendimento = 3

switch (atendimento) {
    case 1:
        console.log(`Otimo`);
        break;
    case 2:
        console.log(`Bom`);
        break;
    case 3:
        console.log(`regular`);
        break;
    case 4:
        console.log(`Ruim`);
        break;
    case 5:
        console.log(`Pessimo`);
        break;

    default:
        console.log(`Valor não encontrado.`);
        break;
}