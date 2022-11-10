import React from 'react';
import memesData from '../memesData';

export default function Meme() {
    function randomMeme() {
        const memesArray = memesData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        console.log(memesArray[randomNum].url);
    }

    return (
        <section>
            <div className="meme--form">
                <input type="text" placeholder="Top text" className="meme--input"/>
                <input type="text" placeholder="Bottom text" className="meme--input"/>
                <button onClick={randomMeme} className="meme--button">Get a new meme image 🖼</button>
            </div>
        </section>
    )
}