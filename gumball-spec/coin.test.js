const Coin = require('../Coin');
describe('../Test Coins', () => {
    test('Coin should have value', () => {
        const coinArgs = {
        'value': .25,
        'name': 'Quarter'
    }
        const quarter = new Coin(coinArgs);
        expect(quarter.value).toBe(.25);
    });

    test('Coin should have a name', () => {
        const coinArgs = {
            'value': .25,
            'name': 'Quarter'
        }
        const quarter = new Coin(coinArgs);
        const name = quarter.name
        expect(name).toBe('Quarter');
    });

    test.todo('Should be only able to have Pennies, Quarters, Nickels, Dimes');
});