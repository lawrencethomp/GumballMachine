const GumballMachine = require('../GumballMachine');
const gumball = require('../gumball');

test('expect a good message', () => {
    expect(gumball()).toBe('enjoy your gumball');
});

test.todo('Small gumballs cost 25 cents, large gumballs cost a dollar');

test('Gumball machine keeps track of how many gumballs there are.', ()=> {
    const gumballMachine = new GumballMachine(25, 15);
    expect(gumballMachine.smallGumballs).toBe(25);
    expect(gumballMachine.largeGumballs).toBe(15);
});

test('Gumball machine dispenses gumballs, and the count goes down.', ()=> {
    const gumballMachine = new GumballMachine(5, 4);
    gumballMachine.giveGumball('small');
    gumballMachine.giveGumball('large');
    expect(gumballMachine.smallGumballs).toBe(4);
    expect(gumballMachine.largeGumballs).toBe(3);
})