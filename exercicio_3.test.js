const { soma_multiplos } = require('./exercicio_3.js')

describe('Calcule a soma dos números múltiplos de 5 e 7 abaixo de 1000', () => {
    
        it('Soma dos múltiplos de 5 e 7 abaixo de 1000', () => {
            expect(soma_multiplos()).toBe(156361)
        })
    })

