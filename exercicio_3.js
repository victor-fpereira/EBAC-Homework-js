// Exercício 3 - calcule a soma dos números múltiplos de 5 e 7 abaixo de 1000

function soma_multiplos() {

    let soma = 0

    for (let i = 1; i < 1000; i++) {
        if (i % 5 == 0 || i % 7 == 0) {
            soma = soma + i
        }
    }

    return soma

}

module.exports = { soma_multiplos }

