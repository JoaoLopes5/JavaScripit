const {soma} = require('./soma-de-multiplos')

describe('Somando multiplos de 5 e 7 menores que 1000', () => {
    it('Deve somar os multiplos', () => {
        expect(soma()).toBe(156361)
    });
})