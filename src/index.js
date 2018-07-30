import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

// ========================

import store from './store';
import {inputNumber, newGame, infoGame} from './actions';

store.dispatch(inputNumber(14));
store.dispatch(inputNumber(16));
store.dispatch(inputNumber(58));

//outputs both parts of states of both reducers
console.log(store.getState()); 

store.dispatch(newGame());

console.log(store.getState());

store.dispatch(infoGame(false));

console.log(store.getState());

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
