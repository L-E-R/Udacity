/**
 * Card
 * 
 * The card handles the creation, action and evaluation of the cards
 */

// html template for a card
const cardHTML = `
        <div class="game_card__content">
          <div class="game_card__cover">
          </div>
          <div class="game_card__face">
            <i class="pattern fas"></i>
          </div>
        </div>
`;

// defined face patterns for the cards
const CardPatterns = Object.freeze({
  1: { icon: "fa-tree", count: 0 },
  2: { icon: "fa-home", count: 0 },
  3: { icon: "fa-horse", count: 0 },
  4: { icon:  "fa-anchor", count: 0 },
  5: { icon: "fa-motorcycle", count: 0 },
  6: { icon: "fa-fish", count: 0 },
  7: { icon: "fa-coffee", count: 0 },
  8: { icon: "fa-smile", count: 0 }
});


class Card {

  constructor(game) {
    this.game = game;

    this.cards = Object.assign({}, CardPatterns);

    this.firstSelectedCard = undefined;
    this.secondSelectedCard = undefined;

    this.handleCardClickReference = this.handleCardClick.bind(this);
  }

  // handle the click event on a card (first and second card selections)
  handleCardClick(event) {
    if (!this.firstSelectedCard && !event.currentTarget.classList.contains('match')) {
      this.game.stopwatch.start();
      this.firstSelectedCard = event.currentTarget;
      this.firstSelectedCard.classList.add('show');
      this.firstSelectedCard.removeEventListener('click', this.handleCardClickReference);
    } else if (!this.secondSelectedCard && !event.currentTarget.classList.contains('match')) {
      this.game.incrementMove();
      this.secondSelectedCard = event.currentTarget;
      this.secondSelectedCard.classList.add('show');
      this.secondSelectedCard.removeEventListener('click', this.handleCardClickReference);
      this.validateSelections();
    }
  }

  // validate if the two cards selected match, else flip them back over
  validateSelections() {
    if (this.firstSelectedCard.querySelector('.game_card__face i.pattern').className
        === this.secondSelectedCard.querySelector('.game_card__face i.pattern').className) {
      setTimeout( () => {
        this.game.incrementMatches();
        this.firstSelectedCard.classList.add('match');
        this.firstSelectedCard = '';
        this.secondSelectedCard.classList.add('match');
        this.secondSelectedCard = '';
      }, 1000);
    } else {
      setTimeout( () => {
        this.firstSelectedCard.classList.remove('show');
        this.firstSelectedCard.addEventListener('click', this.handleCardClickReference);
        this.firstSelectedCard = '';
        this.secondSelectedCard.classList.remove('show');
        this.secondSelectedCard.addEventListener('click', this.handleCardClickReference);
        this.secondSelectedCard = '';
      }, 1000);
    }
  }

  // reset the selected cards and count for each card pattern
  reset() {
    this.firstSelectedCard = undefined;
    this.secondSelectedCard = undefined;

    for (let i = 1; i <= 8; i++) {
      this.cards[i].count = 0;
    }
  }

  // creates a game card with pattern and appends it to the game board
  createGameCard(index) {
    const cardElement = document.createElement('ARTICLE');
    cardElement.setAttribute('id', index);
    cardElement.classList.add('game_card');
    cardElement.innerHTML = cardHTML;

    cardElement.addEventListener('click', this.handleCardClickReference);

    const face = cardElement.querySelector('i.pattern');
    face.classList.add(this.generateCardPattern());

    const boardElement = document.querySelector('.game_board');
    boardElement.appendChild(cardElement);
  }

  // get a pattern to put on the card face (only allows two of the same pattern)
  generateCardPattern() {

    const min = 1;
    const max = 8;

    let index = 0;
    let available = false;

    while(!available) {
      // generate index for pattern
      index =  Math.floor(Math.random() * (max - min + 1)) + min;

      // check to see if the pattern already has two card count
      available = this.cards[index].count < 2;
    }

    this.cards[index].count++;

    return this.cards[index].icon;

  }
}
