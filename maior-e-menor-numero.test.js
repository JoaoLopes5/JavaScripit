const {maioreMenor} = require('./maior-e-menor-numero')

describe('Busca do maior e menor número', () => {
    it('maior e menor número', () => {
        expect(maioreMenor().maior).toBe(90)
        expect(maioreMenor().menor).toBe(1)
    });
});