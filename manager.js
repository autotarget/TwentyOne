class Manager {
  #playerElement;
  #botElement;
  #dillerElement;
  #deckElement;
  #playerScoreElement;
  #botScoreElement;
  #playerScore;
  #botScore;
  #player;
  #bot;
  #deck;
  #diller;
  #audio;

  constructor(audio) {
    this.#playerElement = document.querySelector("#player");
    this.#botElement = document.querySelector("#bot");
    this.#dillerElement = document.querySelector("#diller");
    this.#deckElement = document.querySelector("#deck");
    this.#playerScoreElement = document.querySelector("#playerScore");
    this.#botScoreElement = document.querySelector("#botScore");
    this.#audio = audio;
  }

  get playerElement() {
    return this.#playerElement;
  }

  get botElement() {
    return this.#botElement;
  }

  get deckElement() {
    return this.#deckElement;
  }

  startGame() {
    this.clearPlayersFields();
    this.clearScore();
    this.clearScoreElements();
    this.#deck = new Deck();
    this.#diller = new Diller(this.#deck.Cards);
    this.#player = new Player("Player");
    this.#bot = new Player("Bot");
    this.#diller.shuffle();
    this.#diller.showDeck(this.#deckElement, this.#audio);
  }

  clearPlayersFields() {
    this.#botElement.innerHTML = '';
    this.#playerElement.innerHTML = '';
  }

  clearScore() {
    this.#playerScore = 0;
    this.#botScore = 0;
  }

  clearScoreElements() {
    this.#playerScoreElement.innerHTML = '';
    this.#botScoreElement.innerHTML = '';
  }

  newDeal() {
    this.clearPlayersFields();
    this.#diller.dealCards(this.#player, this.#playerElement, true, this.#audio);
    if (this.#player.calc_Cards_Sum() == 21) {
      this.#playerScore = this.#playerScore + 1;
      this.#playerScoreElement.innerHTML = `${this.#playerScore}`;
    }

    this.#diller.dealCards(this.#bot, this.#botElement, false, this.#audio);
    if (this.#bot.calc_Cards_Sum() == 21) {
      this.#botScore = this.#botScore + 1;
      this.#botScoreElement.innerHTML = `${this.#botScore}`;
      this.#bot.Cards.forEach(card => {
        card.flip();
        this.#botElement.append(card.element)
      });
    }
    return this.#diller.Deck.length;
  }

  // takeAdditionalCard() {
  //   this.player.Cards = this.#diller.addCard(this.#player, this.#playerElement, true);
  //   this.#player.calc_Cards_Sum();
  //   console.log(this.player.cardsSum);
  // }

}