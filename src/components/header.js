import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true
        }

        // this.newGame = this.newGame.bind(this);
    }

    modalToggle(e) {
        this.setState({
            hidden: false
        })
    }

    // newGame(e) {
    //     this.props.fsd;
    // }

    hideInfo(e) {
        this.setState({
            hidden: true
        })
    }

    render() {
        return (
            <header>
                <TopNav onClick={e => this.modalToggle(e)} newGame={e => this.props.newGameClick(e)}/>
                <InfoModal hidden={this.state.hidden} onClick={e => this.hideInfo(e)} />
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};
