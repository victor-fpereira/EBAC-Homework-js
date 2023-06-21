// Exercício 2 - Calcule o maior e o menor número dentro um array

function maior_menor_valor(array) {

    let numeros = array

    let maior_numero = numeros.reduce(
        function(num_posicao_inicial, num_proxima_posicao) {
        return num_posicao_inicial > num_proxima_posicao ? num_posicao_inicial : num_proxima_posicao; 
    });

    let menor_numero = numeros.reduce(
        function(num_posicao_inicial, num_proxima_posicao) {
        return num_posicao_inicial < num_proxima_posicao ? num_posicao_inicial : num_proxima_posicao; 
    });

    return [maior_numero, menor_numero]
}

module.exports = { maior_menor_valor }