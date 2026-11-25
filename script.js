// 1. Cria a lista com 5 periféricos
const perifericos = [
    "Teclado Mecânico",
    "Mouse Gamer",
    "Headset RGB",
    "Mousepad XL",
    "Monitor 24''"
];

// 2. Altera o terceiro item (índice 2, pois a contagem começa no 0)
perifericos[2] = "Webcam Full HD";

// 3. Percorre a lista com 'for' e exibe cada item com sua posição
for (let contador = 0; contador < perifericos.length; contador = contador + 1) {
    console.log("Posição " + contador + ": " + perifericos[contador]);
}
