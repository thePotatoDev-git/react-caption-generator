import React from 'react';

export default function Header() {
    return (
        <header>
            <div className="header--title">
                <img src="./images/troll-face.png" className="header--image"/>
                <h2>Caption Generator</h2>
            </div>
            <div className="header--caption">
                <h4>the #potatoDev</h4>
            </div>
        </header>
    )
}