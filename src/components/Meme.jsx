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

    function handleCaption(event) {
        const {name, value} = event.target;
        
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    return (
        <section>
            <div className="meme--form">
                <input className="meme--input"
                     type="text" 
                     placeholder="Top text" 
                     name="topText"
                     value={meme.topText}
                     onChange={handleCaption}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="meme--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleCaption}
                />
                <button 
                    onClick={randomMeme} 
                    className="meme--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}