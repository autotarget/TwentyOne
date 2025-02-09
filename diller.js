class Diller {
    #deck;

    constructor(deck) {
        this.#deck = deck;
    }

    get Deck() {
        return this.#deck;
    }

    shuffle() {
        this.#deck.sort(() => Math.random() - 0.5);
    }

    showDeck(deckElement) {
        let X = 0;
        let Y = 0;
        let index = 0;
        this.Deck.forEach(card => {
            setTimeout(function () {
                card.element.style.transform = `translate(${X}px, ${Y}px)`;
                deckElement.append(card.element);
                Y += 1;
                X += 1;
            }, index * 50)
            index++;
        });
    }


    dealCards(player, zone, flip) {
        let X = -50;
        let Y = 0;
        let index = 0;
        player.Cards = this.#deck.splice(0, 2);
        player.Cards.forEach(card => {
            setTimeout(function () {
                card.element.style.transform = `translate(${X}px, ${Y}px)`;
                if (flip) {
                    card.flip();
                    zone.append(card.element);
                }
                else zone.append(card.element);
                X += 150;
            }, index * 100)
            index++;
        });
        return player.Cards;
    }

    // addCard(player, zone, flip) {
    //     console.log(player.Cards);
    //     player.Cards = this.#deck.splice(0, 1);
    //     player.Cards.forEach(card => {
    //         if (flip) {
    //             card.flip();
    //             zone.append(card.element);
    //         }
    //         else zone.append(card.element);
    //     });
    //     console.log(player.Cards);
    //     return player.Cards;
    // }
}