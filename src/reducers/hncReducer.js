import {GUESS_NUMBER, NEW_GAME} from '../actions';
const initialState =  {
  number:  (Math.floor(Math.random() * 100) + 1),
  guess: '',
  guessList: [],
  count: 0,
  feedback: ''
};

export const hncReducer = (state=initialState, action) => {
  if(action.type === GUESS_NUMBER){
    let feedbackGuess;
    if(action.guess === state.number){
      feedbackGuess = 'You did it!';
    }
    else if (action.guess - 5 <= state.number && state.number <= action.guess + 5) {
      feedbackGuess =  'Hot!';
    }
    else if (action.guess - 10 <= state.number && state.number <= action.guess + 10) {
      feedbackGuess =  'Warm!';
    }
    else {
      feedbackGuess =  'Cold!';
    }
    return Object.assign({}, state, 
      {
        guess: action.guess, 
        guessList: [...state.guessList, action.guess],
        count: state.count + 1,
        feedback: feedbackGuess
      });
  }
  if(action.type=== NEW_GAME){
    return Object.assign({}, state, {

      number:  (Math.floor(Math.random() * 100) + 1),
      guess: '',
      guessList: [],
      count: 0,
      feedback: ''
    });
  }
  return state;
};