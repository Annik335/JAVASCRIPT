do {
    idade = prompt(`insira sua idade: (maior que 0:)`);
    idade = idade; 
} while (idade && idade <= 0);

console.log("Idade válida: " + idade);
