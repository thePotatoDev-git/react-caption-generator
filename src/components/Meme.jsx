import React from 'react';
import memesData from '../memesData';

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState('');
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: '',
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function randomMeme() {
        const memesArray = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNum].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    return (
        <section>
            <div className="meme--form">
                <input type="text" placeholder="Top text" className="meme--input"/>
                <input type="text" placeholder="Bottom text" className="meme--input"/>
                <button onClick={randomMeme} className="meme--button">Get a new meme image 🖼</button>
            </div>
            <div className="meme--image">
                <img src={meme.randomImage} className="meme--image" />
            </div>
        </section>
    )
}