class Notebook {
    constructor(modelo, processador, memoria, armazenamento, tela) {
        this.modelo = modelo,
            this.processador = processador,
            this.memoria = memoria,
            this.armazenamento = armazenamento,
            this.tela = tela
    }
}
let note1= new Notebook ('V15', 'I5 13Gen', '8GB','512', '15P')
let note2 = new Notebook ('Galaxy Book4', 'I5', '8GB', '256', '15,6')
console.log(note1);
console.log(`===========================================================`);
console.log(note2);

