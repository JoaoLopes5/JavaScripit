const {mdc} = require('./calculando-mdc')

describe('Calculando máximo multiplo comum de dois números', () => {
    it('Deve mostrar o mdc', () => {
        expect(mdc(20, 10)).toBe(10)
        expect(mdc(15, 5)).toBe(5);
    });
});