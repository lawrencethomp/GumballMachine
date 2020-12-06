const GumballMachine = require('../GumballMachine');
const gumball = require('../main');

test('expect a good message', () => {
    expect(gumball()).toBe('enjoy your gumball');
});



test('Gumball Machines can set cost', ()=>{
    const machineArgs = {
        'cost': {
            'large': 1.00,
            'small': .25
        },
        'count': {
            'largeGumballs': 25,
            'smallGumballs': 15
        }
    };
    const gumballMachine = new GumballMachine(
        machineArgs)
    expect(gumballMachine.cost.large).toBe(1.00);
    expect(gumballMachine.cost.small).toBe(.25);
});

test('Gumball machine keeps track of how many gumballs there are.', ()=> {
    const machineArgs = {
        'cost': {
            'large': 1.00,
            'small': .25
        },
        'count': {
            'largeGumballs': 15,
            'smallGumballs': 25
        }
    };
    const gumballMachine = new GumballMachine(machineArgs);
    expect(gumballMachine.count.smallGumballs).toBe(25);
    expect(gumballMachine.count.largeGumballs).toBe(15);
});

test('Gumball machine dispenses gumballs, and the count goes down.', ()=> {
    const machineArgs = {
        'cost': {
            'large': 1.00,
            'small': .25
        },
        'count': {
            'largeGumballs': 15,
            'smallGumballs': 25
        }
    };
    const gumballMachine = new GumballMachine(machineArgs);
    gumballMachine.giveGumball('small');
    gumballMachine.giveGumball('large');
    expect(gumballMachine.count.smallGumballs).toBe(24);
    expect(gumballMachine.count.largeGumballs).toBe(14);
});
test('Entering the wrong size will not give you a gumball.', () => {
    const machineArgs = {
        'cost': {
            'large': 1.00,
            'small': .25
        },
        'count': {
            'largeGumballs': 15,
            'smallGumballs': 25
        }
    };
    const gumballMachine = new GumballMachine(machineArgs);
    const wrongSize = gumballMachine.giveGumball('Really Big');
    expect(wrongSize).toBe('Select a Proper Size');
});