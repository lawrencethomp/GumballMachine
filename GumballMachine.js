class GumballMachine {
    constructor(smallGumballs, largeGumballs) {
        this.largeGumballs = largeGumballs;
        this.smallGumballs = smallGumballs;
    }
    giveGumball = (size) => {
        if (size == 'small') {
            this.smallGumballs--
            return 'Small Gumball'
        }
        if (size == 'large') {
            this.largeGumballs--
            return 'Large Gumball'
        }
        else {
            return 'Select a Proper Size';
        }
    }
}
module.exports = GumballMachine;