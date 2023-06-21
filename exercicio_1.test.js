const { MDC1 } = require('./exercicio_1.js')

describe('Calcule o MDC (máximo divisor comum) entre dois números', () => {

    it('MDC de 2 e 4', () => {
        expect(MDC1(2, 4)).toBe(2)
    })
    it('MDC de 3 e 6', () => {
        expect(MDC1(3, 6)).toBe(3)
    })
    it('MDC de 10 e 20', () => {
        expect(MDC1(10, 20)).toBe(10)
    })
    it('MDC de 47 e 53', () => {
        expect(MDC1(47, 53)).toBe(1)
    })
})