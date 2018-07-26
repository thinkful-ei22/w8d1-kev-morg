import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {

    let currentValue='';

    return (
        <form onSubmit={e =>  { e.preventDefault(); props.onSubmit(currentValue); console.log(currentValue, 'hey, it worked!'); }}>
            <input type="number" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required onChange={e => { console.log(e.target.value); currentValue=e.target.value}} />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
        </form>
    );
};

