//'use strict';

//not enterGuess
import { ENTER_GUESS, NEW_GAME, SHOW_WHAT_INFO } from '../actions';

const initialState = {
    guessArray : [],
    feedback : "Take a Guess!",
    answer: Math.floor(Math.random()*101),
    whatInfo: false

};

const counterReducer = (state = initialState, action) => {
console.log('Reducer used');
    let userGuess = action.userGuess;
//console.log(userGuess, isNaN(userGuess));
if(!userGuess){
    

        return;
}
    if(isNaN(userGuess)){

        alert('You entered NOT A NUMBER');

        return;
     } 

     //check if duplicate number

     if(state.guessArray.includes(userGuess)){

        alert('You entered this number already!');

        return;
     }

     //calculate the absolute differnce between our guess and our answer


    const diff = Math.abs(parseInt(userGuess) - state.answer);

    let feedback;

    if(diff > 50){ 
        feedback = 'You are Ice Cold';
    }
    else if(diff  > 25){

        feedback = 'You are cold';
    }

    else if(diff > 10){

        feedback = 'You are lukewarm'
    }
    else if(diff > 2){

        feedback = 'You are warm'
    }
    else if(diff <= 2){

        feedback = 'You are hot'
    } 
    else if(diff === 0){
        feedback = 'You are WINNER! '
    }
    //no '' for enter guess
if (action.type === ENTER_GUESS){
    return Object.assign({}, state, {
     //no error but nothing console logged when Array was misspelt
        guessArray: [...state.guessArray, userGuess]
    })
} 

else if (action.type === NEW_GAME){
    return Object.assign({}, state, {
     //no error but nothing console logged when Array was misspelt
        guessArray: [],
        feedback: 'Take a Guess!',
        answer: Math.floor(Math.random()*101),
        whatInfo: false
    })
} 


else if(action.type === SHOW_WHAT_INFO){
    return Object.assign({}, state,{
        whatInfo: !state.whatInfo
    } );
}

//try just return state
else {

    return state
}
}

export default counterReducer
