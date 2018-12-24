# Memory Game Project
The memory game consists of 16 cards that are turned face down. There are 8 unique faces to the cards that need to be matched.

## Objective:
Match all the cards in the game

## How to Play:
The game starts when the first card to be matched is selected, flipping over and revealing the pattern on its face.
This selection will also start the game timer, clocking how long it takes to win the game.

Next select a second card to flip over in an attempt to match the first card.
This selection will count as a move towards the number of moves it takes to win the game.

Moves are also what controls the rank of play. The game starts with three stars and will reduce the more moves it takes to win the game.

    Ranking Rules:
        3 stars - until 12 moves have been made
        2 stars - until 16 moves have been made
        1 star  - when moves are greater than 16

### Matching
If the two selections match, the cards will be locked in face up position. They will no longer be selectable.

In the event the cards do not match, they will be flipped back over hiding the patterns.

### Continue Play
The game continues by selecting two more cards to try and make a match.

### Game Ends
The game ends when all cards have been matched.

## Reset
There is also a reset button at the top left of the game board that will reset the game to it's starting state.
This will reset the ranking, timer, moves and shuffle the game cards.


