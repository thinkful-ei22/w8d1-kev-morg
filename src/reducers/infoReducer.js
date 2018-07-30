import {INFO_GAME} from '../actions';

const initialState = {
  hidden: true
};

export const infoReducer = (state=initialState, action) => {
 
  console.log(state);
 
  if(action.type === INFO_GAME){
    return Object.assign({}, state, {hidden: false});
  }
  return state;
};