//Enter Guess
export const ENTER_GUESS = 'ENTER_GUESS';
export const enterGuess = userGuess => ({
    type: ENTER_GUESS,
    userGuess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = startNewGame => ({
    type: NEW_GAME,
    startNewGame
});

export const SHOW_WHAT_INFO = 'SHOW_WHAT_INFO';
export const showWhatInfo = whatInfo => ({
    type: SHOW_WHAT_INFO,
    whatInfo
})