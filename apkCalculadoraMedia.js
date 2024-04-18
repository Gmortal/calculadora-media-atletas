class Atleta {
  constructor(nome, notas) {
      this.nome = nome;
      this.notas = notas;
  }

  calcularMedia() {
      
      let notasClonadas = this.notas.slice();

      
      notasClonadas.sort((a, b) => a - b);

      
      let notasValidas = notasClonadas.slice(1, 4);

      
      let soma = 0;
      notasValidas.forEach(nota => {
          soma += nota;
      });

      let media = soma / notasValidas.length;

      return media.toFixed(2); 
  }

  exibirResultado() {
      // Formatando e exibindo os resultados
      console.log(`Atleta: ${this.nome}`);
      console.log(`Notas Obtidas: ${this.notas.join(', ')}`);
      console.log(`Média Válida: ${this.calcularMedia()}`);
      console.log(""); // linha em branco para separar os resultados
  }
}


let atletas = [
  new Atleta("Cesar Abascal", [10, 9.34, 8.42, 10, 7.88]),
  new Atleta("Fernando Puntel", [8, 10, 10, 7, 9.33]),
  new Atleta("Daiane Jelinsky", [7, 10, 9.5, 9.5, 8]),
  new Atleta("Bruno Castro", [10, 10, 10, 9, 9.5])
];


atletas.forEach(atleta => {
  atleta.exibirResultado();
});