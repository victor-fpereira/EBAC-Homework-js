const { maior_menor_valor } = require('./exercicio_2.js')

describe('Retorne o maior e o menor número de um array de números', () => {

    it('Maior e menor entre [2, 3, 5, 7]', () => {
        let valores = maior_menor_valor([2, 3, 5, 7])
        let maior = valores[0]
        let menor = valores[1]
        expect(maior).toBe(7)
        expect(menor).toBe(2)
    })
    it('Maior e menor entre [-2, -3, -5, -7]', () => {
        let valores = maior_menor_valor([-2, -3, -5, -7])
        let maior = valores[0]
        let menor = valores[1]
        expect(maior).toBe(-2)
        expect(menor).toBe(-7)
    })
    it('Maior e menor entre [0, 2, 3, 5]', () => {
        let valores = maior_menor_valor([0, 2, 3, 5])
        let maior = valores[0]
        let menor = valores[1]
        expect(maior).toBe(5)
        expect(menor).toBe(0)
    })
})