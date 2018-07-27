//'use strict';

//not enterGuess
import { ENTER_GUESS } from '../actions';

const initialState = {
    guessArray : [],
    feedback : "Take a Guess!",
    answer: Math.floor(Math.random()*101),

};

const counterReducer = (state = initialState, action) => {
console.log('Reducer used');
    let userGuess = action.userGuess;
    //no '' for enter guess
if (action.type === ENTER_GUESS){
    return Object.assign({}, state, {
     
        guessArray: [...state.guessArray, userGuess]
    })
} else {

    return state
}
}

export default counterReducer
