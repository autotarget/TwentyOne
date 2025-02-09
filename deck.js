class Deck {
    #cardsImages = ["6_Spades.png", "6_Clubs.png", "6_Hearts.png", "6_Diamonds.png", "7_Spades.png", "7_Clubs.png", "7_Hearts.png", "7_Diamonds.png", "8_Spades.png", "8_Clubs.png", "8_Hearts.png", "8_Diamonds.png", "9_Spades.png", "9_Clubs.png", "9_Hearts.png", "9_Diamonds.png", "10_Spades.png", "10_Clubs.png", "10_Hearts.png", "10_Diamonds.png", "J_Spades.png", "J_Clubs.png", "J_Hearts.png", "J_Diamonds.png", "Q_Spades.png", "Q_Clubs.png", "Q_Hearts.png", "Q_Diamonds.png", "K_Spades.png", "K_Clubs.png", "K_Hearts.png", "K_Diamonds.png", "A_Spades.png", "A_Clubs.png", "A_Hearts.png", "A_Diamonds.png"];
    #cardsSuits = ["spades", "clubs", "hearts", "diamonds"];
    #cardsNominals = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    #cards = [];

    constructor() {
        let j = 0;
        this.#cardsNominals.forEach(nominal => {
            this.#cardsSuits.forEach(suit => {
                this.#cards.push(new Card(nominal, suit, this.#cardsImages[j]))
                j++;
            });
        });

        this.#cards.forEach(card => {
            if (Number(card.nominal <= 10)) {
                card.weight = Number(card.nominal);
            }
            else if (card.nominal == "A") {
                card.weight = 11;
            }
            else card.weight = 10;
        });
    };

    get Cards() {
        return this.#cards;
    }

    set Cards(value) {
        return this.#cards = value;
    }
}