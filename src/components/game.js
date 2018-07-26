import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number: (Math.floor(Math.random() * 100) + 1),
            guess: "",
            guessList: [],
            count: 0,
            feedback: ""
        }
    }

    handleClick(value) {
        // event.preventDefault();
        console.log(value, 'Button Clicked!');
        this.setState({
            guess: value
        });
        this.setState({
            guessList: this.state.guessList.concat(value)
        })
        this.setState({
            count: this.state.count + 1
        })

        const guessVal = this.state.guess === this.state.number ? "You won!" : "Try again";

        this.setState({
            feedback: guessVal
        })

    }

    render() {

        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback}  handleClick={e => this.handleClick(e)} />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guessList} />
            </div>
        );

    };
}

