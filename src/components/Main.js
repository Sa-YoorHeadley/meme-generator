import React, { useState } from 'react';
import memeData from '../memeData';

export default function Main() {
    const [meme, setMeme] = useState({'topText': '', 'bottomText': '', 'url': ''})
    const [allMemes, setAllMemes] = useState(memeData)

    function getMeme(){
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length - 1 )
        const randomMeme = memeArray[randomNumber].url

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                url: randomMeme
            }
        })
    }

    function handleChange(event){
        const { name, value } = event.target

        setMeme(prevMeme =>{
            return{
                ...prevMeme,
                [name]: value
            }
        })
    }


    return(
        <main className='main'>
            <div className='form'>
                <input type='text' placeholder="Top Text" className='input' name='topText' value={meme.topText} onChange={handleChange}/>
                <input type='text' placeholder="Bottom Text" className='input' name='bottomText' value={meme.bottomText} onChange={handleChange}/>

                <button onClick={getMeme} className='btn'>Get a new meme image 🖼</button>
                <div className='image-container'>
                    {<img src={meme.url} className='image'/>}
                    <h2 className='image-text top'>{meme.topText}</h2>
                    <h2 className='image-text bottom'>{meme.bottomText}</h2>
                </div>
            </div>

        </main>
    );
}
