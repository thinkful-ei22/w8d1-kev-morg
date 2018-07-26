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
        console.log(value, 'Button Clicked!');
        value = parseInt(value);
        this.setState({
            guess: value,
            guessList: this.state.guessList.concat(value),
            count: this.state.count + 1
        });

        console.log(value);
        console.log(this.state.number);

        if (value === this.state.number) {
            this.setState({
                feedback: "You did it!"
            })
            console.log('feedback', this.state.feedback);
        } else if (value - 5 <= this.state.number && this.state.number <= value + 5) {
            this.setState({
                feedback: "Hot!"
            })
        } else if (value - 10 <= this.state.number && this.state.number <= value + 10) {
            this.setState({
                feedback: "Warm!"
            })
        } else {
            this.setState({
                feedback: "Cold!"
            })
        }
    }

    newGameClick(e) {
        // e.preventDefault();
        console.log('New game started!');
        this.setState({
            number: (Math.floor(Math.random() * 100) + 1),
            guess: "",
            guessList: [],
            count: 0,
            feedback: ""
        });
    };

    render() {

        return (
            <div>
                <Header newGameClick={e => this.newGameClick(e)}/>
                <GuessSection feedback={this.state.feedback}  handleClick={e => this.handleClick(e)} />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guessList} />
            </div>
        );

    };
}

