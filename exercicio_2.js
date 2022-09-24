// Exercício 2 - Calcule o maior e o menor número dentro um array

function maior_menor_valor() {

    let numeros = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

    let maior_numero = numeros.reduce(
        function(num_posicao_inicial, num_proxima_posicao) {
        return num_posicao_inicial > num_proxima_posicao ? num_posicao_inicial : num_proxima_posicao; 
    });

    let menor_numero = numeros.reduce(
        function(num_posicao_inicial, num_proxima_posicao) {
        return num_posicao_inicial < num_proxima_posicao ? num_posicao_inicial : num_proxima_posicao; 
    });

    console.log(`O maior número do array é: ${maior_numero}`);
    console.log(`O menor número do array é: ${menor_numero}`);

}