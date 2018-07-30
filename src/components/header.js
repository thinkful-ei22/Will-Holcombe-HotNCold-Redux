import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <TopNav reset={()=>props.resetGame()} handleWhatInfo={()=>props.handleWhatInfo()} />
                  <InfoModal handleWhatInfo={()=>props.handleWhatInfo()} visible= {props.visiblity}/>
            {/* <InfoModal /> */}
            <h1>HOT or COLD</h1>
        </header>
    );
};
