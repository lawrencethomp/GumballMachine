class GumballMachine {
    constructor(params) {
        this.cost = params.cost;
        this.count = params.count;
    }
    giveGumball = (size) => {
        if (size == 'small') {
            this.count.smallGumballs--
            return 'Small Gumball'
        }
        if (size == 'large') {
            this.count.largeGumballs--
            return 'Large Gumball'
        }
        else {
            return 'Select a Proper Size';
        }
    }
}
module.exports = GumballMachine;