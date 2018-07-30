import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';
import {connect} from 'react-redux';
import {infoGame} from '../actions';
import './header.css';

function Header (props) {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     hidden: true
  //   };

  //       // this.newGame = this.newGame.bind(this);
  // }

  // modalToggle(e) {
  //   this.setState({
  //     hidden: false
  //   });
  // }

    // newGame(e) {
    //     this.props.fsd;
    // }

  // hideInfo(e) {
  //   this.setState({
  //     hidden: true
  //   });
  // }

  // render() {
  return (
            <header>
                <TopNav onClick={() => props.dispatch(infoGame(false))} newGame={e => props.newGameClick(e)}/>
                <InfoModal hidden={props.hidden} onClick={() => props.dispatch(infoGame(true))} />
                <h1>HOT or COLD</h1>
            </header>
        );
}
// }

const mapStateToProps = (state, props) => ({
  hidden: state.info.hidden
});

export default connect(mapStateToProps)(Header);