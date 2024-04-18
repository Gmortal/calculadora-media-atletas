# calculadora-media-atletas

Este projeto é para certificação para o DevStar onde consiste em uma aplicação em JavaScript para calcular a média das notas de atletas em uma competição de ginástica artística.

**Funcionalidades**

Recebe uma lista de atletas com seus respectivos nomes e notas.
Calcula a média das notas válidas de cada atleta (desconsiderando a maior e a menor nota).
Exibe os resultados, incluindo o nome do atleta, notas obtidas e média calculada.

**Pré-requisitos**

Node.js instalado para execução do código JavaScript.

**Como Usar** 

Clone o repositório:

git clone https://github.com/Gmortal/calculadora-media-atletas.git

Navegue até o diretório do projeto:

cd nome-do-repositorio
Execute o código JavaScript:

node nome-do-arquivo.js

Os resultados serão exibidos no console.

**Exemplo de Entrada**

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

**Saída Esperada**

Atleta: Cesar Abascal
Notas Obtidas: 10, 10, 7.88, 8.42, 9.34
Média Válida: 9.253333

Atleta: Fernando Puntel
Notas Obtidas: 10, 10, 7, 8, 9.33
Média Válida: 8.906

Atleta: Daiane Jelinsky
Notas Obtidas: 10, 7, 8, 9.5, 9.5
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10, 10, 9, 9.5, 10
Média Válida: 9.5

Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar uma solicitação de recebimento (pull request).
