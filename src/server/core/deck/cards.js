export const spy = {
  name: 'Spy',
  rules: [
      'A Spy has no effect when played or discarded.',
      'At the end of the round, if you are the only player still in the round who played or discarded a Spy, you gain one favor token.',
      'This does not count as winning the round; the winner (even if it is you) still gains their token.',
      'Even if you play and/or discard two Spies, you still gain only one token.'
  ],
  copies: 2,
  level: 0
}

export const guard = {
  name: 'Guard',
  rules: [
      'Choose another player and name a character other than Guard. If the chosen player has that card in their hand, they are out of the round.'
  ],
  copies: 6,
  level: 1
}

export const priest = {
  name: 'Priest',
  rules: [
      'Choose another player and secretly look at their hand (without revealing it to anyone else).'
  ],
  copies: 2,
  level: 2
}

export const baron = {
  name: 'Baron',
  rules: [
      'Choose another player. You and that player secretly compare your hands. Whoever has the lower value card is out of the round.',
      'If there is a tie, neither player is out of the round'
  ],
  copies: 2,
  level: 3
}

export const handmaid = {
  name: 'Handmaid',
  rules: [
      'Until the start of your next turn, other players cannot choose you for their card effects.',
      'In the rare case that all other players still in the round are "protected" by a Handmaid when you play a card, do the following:',
      '* If that card requires you to choose another player (Guard, Priest, Baron, King), your card is played with no effect.',
      'If that card requires you to choose any player (Prince), then you must choose yourself for the effect.'
  ],
  copies: 2,
  level: 4
}

export const prince = {
  name: 'Prince',
  rules: [
      'Choose any player (including yourself). That player discards their hand (without resolving its effect) and draws a new hand.',
      'If the deck is empty, the chosen player draws the facedown set-aside card.',
      'If a player chooses you for the Prince effect, and you are forced to discard the Princess, you are out of the round.'
  ],
  copies: 2,
  level: 5
}

export const chancellor = {
  name: 'Chancellor',
  rules: [
      'Draw two cards from the deck into your hand. Choose and keep one of the three cards now in your hand, and place the other two facedown on the bottom of the deck in any order.',
      'If there is only one card in the deck, draw it and return one card. If there are no cards left, this card is played with no effect.'
  ],
  copies: 2,
  level: 6
}

export const king = {
  name: 'King',
  rules: [
      'Choose another player and trade hands with that player.'
  ],
  copies: 1,
  level: 7
}

export const countess = {
  name: 'Countess',
  rules: [
      'The Countess has no effect when played or discarded.',
      'You must play the Countess as the card for your turn if either the King or a Prince is the other card in your hand.',
      'You can still choose to play the Countess as the card for your turn even if you do not have the King or a Prince.',
      'When you play the Countess, do not reveal your other card; the other players will not know if you were forced to play it or chose to play it.',
      'The Countess’s effect does not apply when you draw cards for other effects (Chancellor).'
  ],
  copies: 1,
  level: 8
}

export const princess = {
  name: 'princess',
  rules: [
      'If you either play or discard the Princess for any reason, you are immediately out of the round.'
  ],
  copies: 1,
  level: 9
}

export default [
  { ...spy },
  { ...guard },
  { ...priest },
  { ...baron },
  { ...handmaid },
  { ...prince },
  { ...chancellor },
  { ...king },
  { ...countess },
  { ...princess }
]