class Card {
    #image;
    #suit;
    #nominal;
    #weight;
    #element;
    #isFlipped = false;

    constructor(nominal, suit, image, weight) {
        this.#nominal = nominal;
        this.#suit = suit;
        this.#image = image;
        this.#weight = weight;
        this.#element = document.createElement("div");
        this.#element.classList.add("card");
        this.#element.style.backgroundImage = `url('${this.coverPath}')`;
        this.#element.connectedCard = this;
    }
    get imagePath() {
        return `img/${this.#image}`;
    }

    get coverPath() {
        return 'img/Cover.png';
    }

    get element() {
        return this.#element;
    }
 
    get isFlipped() {
        return this.#isFlipped;
    }

    get nominal() {
        return this.#nominal;
    }

    get suit() {
        return this.#suit;
    }

    get weight() {
        return this.#weight;
    }

    set weight(val) {
        return this.#weight = val;
    }

    flip() {
        if (this.#isFlipped)
            this.#element.style.backgroundImage = `url('${this.coverPath}')`;
        else
            this.#element.style.backgroundImage = `url('${this.imagePath}')`;

        this.#isFlipped = !this.#isFlipped;
    }
  }