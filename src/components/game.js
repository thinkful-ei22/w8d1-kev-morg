import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import {connect} from 'react-redux';
import {inputNumber, newGame} from '../actions';

function Game (props) {
  // console.log(props.guessList, props);
  return (
            <div>
                <Header newGameClick={() => props.dispatch(newGame())}/>
                <GuessSection feedback={props.feedback}  handleClick={e => props.dispatch(inputNumber(e))} />
                <GuessCount count={props.count} />
                <GuessList guesses={props.guessList} />
            </div>
        );

}
Game.defaultProps = {
  number:  50,
  guess: 0,
  guessList: [1],
  count: 1,
  feedback: 'Something Went Really, REALLY Wrong'
};

const mapStateToProps = (state, props) => ({
  number:  state.hnc.number,
  guess: state.hnc.guess,
  guessList: state.hnc.guessList,
  count: state.hnc.count,
  feedback: state.hnc.feedback
});

export default connect(mapStateToProps)(Game);
