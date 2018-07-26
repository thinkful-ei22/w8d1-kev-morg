import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li onClick={e => props.onClick(e)}>
                    <a className="what" href="#">
                        What?
                    </a>
                </li>
                <li onClick={e => props.newGame(e)}>
                    <a className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

