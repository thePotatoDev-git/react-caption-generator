import React from 'react';

export default function Meme() {
    return (
        <section>
            <form className="meme--form">
                <input type="text" placeholder="Top text" className="meme--input"/>
                <input type="text" placeholder="Bottom text" className="meme--input"/>
                <button className="meme--button">Get a new meme image 🖼</button>
            </form>
        </section>
    )
}