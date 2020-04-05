import React from 'react';

import "./Header.sass";

const Header = () => {
    return ( 
        <header id="header">
            <div className="background-color"></div>
            <div className="warning-top">
                <div className="top"></div>
                <div className="bottom"></div>
            </div>
            <div className="warning-bottom">
                <div className="top"></div>
                <div className="bottom"></div>
            </div>
            <div className="pcloop-top"></div>
            <div className="pcloop-bottom"></div>
            <div className="grid">
                <div className="gato">
                    <img className="left-to-right" src={require('../../assets/cat.png')} alt=""/>
                </div>
                <div className="logo"><img src={require('../../assets/logo.png')} alt=""/></div>
            </div>
            <div className="background-image"></div>
        </header>
    );
}
 
export default Header;