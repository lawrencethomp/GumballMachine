const Gumball = require('../Gumball' );

describe('Gumball Unit Tests', () => {
    test('Gumballs have a size', () => {
        args = {'size': 'large'}
        const greenGumballs = new Gumball(args);
        expect(greenGumballs.size).toBe('large');
    });
test('Gumballs have a color', () => {
    args = {'color': 'green'}
    const greenGumballs = new Gumball(args)
    expect(greenGumballs.color).toBe('green');
    
});
    test('Gumballs have a gross', () => {
        const args = {'gross': 25};
        const greenGumballs = new Gumball(args)
        const gross = greenGumballs.gross;
        expect(gross).toBe(25);
    });
});