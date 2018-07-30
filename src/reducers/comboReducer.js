import {combineReducers} from 'redux';
import {hncReducer} from './hncReducer';
import {infoReducer} from './infoReducer';

export const rootReducer = combineReducers({
  info: infoReducer,
  hnc: hncReducer
});
