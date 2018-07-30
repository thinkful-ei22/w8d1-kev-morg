export const GUESS_NUMBER = 'GUESS_NUMBER';
export const NEW_GAME = 'NEW_GAME';
export const INFO_GAME = 'INFO_GAME';

export const inputNumber = guess => ({
  type: GUESS_NUMBER,
  guess
});

export const newGame = () => ({
  type: NEW_GAME
});

export const infoGame = hidden => ({
  type: INFO_GAME,
  hidden
});