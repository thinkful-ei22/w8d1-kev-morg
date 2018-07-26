import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            guess: "",
            // guessList: [],
        }
    }

    handleClick(value) {
        event.preventDefault();
        console.log(value, 'Button Clicked!');
        // this.setState({});
    }

    render() {

        return (
            <div>
                <Header />
                <GuessSection feedback="Make your guess!"  handleClick={e => this.handleClick(e)}/>
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );

    };
}

