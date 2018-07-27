import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import { enterGuess } from './actions';

import store from './components/store';



ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

console.log(store.getState());
store.dispatch(enterGuess(5));
console.log(store.getState());
