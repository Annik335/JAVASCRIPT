let idades = [49, 32, 15, 81, 16]
let idadeMenores = idades.filter( (idade)=>{
return idade < 18
})
console.log(idadeMenores);

let idade = [49, 32, 15, 81, 16]
let idadeMaiores = idades.filter( (idade)=>{
return idade > 25
})
console.log(idadeMaiores);