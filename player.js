class Player {
    #cardsOnHands = [];
    #cardsSum;
    #name;

    constructor(name){
        this.#name = name;
    }

    set Cards(value) {
        return this.#cardsOnHands = value;
    }

    get Cards() {
        return this.#cardsOnHands;
    }
    set cardsSum(value) {
        return this.#cardsSum = value;
    }
    get cardsSum() {
        return this.#cardsSum;
    }
    get name() {
        return this.#name;
    }


    calc_Cards_Sum() {
        let Sum = 0;
        this.#cardsOnHands.forEach(card => {
            Sum += card.weight;
            this.#cardsSum = Sum;
        });
        return this.cardsSum;
    }
}