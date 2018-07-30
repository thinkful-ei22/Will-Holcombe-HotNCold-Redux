import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './components/store';
import { enterGuess, newGame, showWhatInfo } from './actions';



console.log(store.getState());
store.dispatch(enterGuess("5"));

store.dispatch(newGame());
console.log(store.getState());

store.dispatch(showWhatInfo());
console.log(store.getState());

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

