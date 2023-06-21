// Exercício 1 - Calcule o MDC (máximo divisor comum) entre dois números

function MDC1(n1, n2) {

    let divisores_primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    let i = 0
    let mdc = 1
    let num1 = n1, num2 = n2
    
    while (i < divisores_primos.length) {

        if (num1 % divisores_primos[i] == 0 && num2 % divisores_primos[i] == 0) {
            num1 = num1 / divisores_primos[i]
            num2 = num2 / divisores_primos[i]
            mdc = mdc * divisores_primos[i]
        }
        else { i += 1 }
    }

    return mdc
}

module.exports = { MDC1 }