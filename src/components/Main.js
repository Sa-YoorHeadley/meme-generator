import React from 'react';
import memeData from '../memeData';

export default function Main() {
    function getMeme(){
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length - 1 )
        const randomMeme = memeArray[randomNumber]
        console.log(randomMeme)
    }
    return(
        <main className='main'>
            <div className='form'>
                <input type='text' placeholder="Top Text" className='input' id='top'/>
                <input type='text' placeholder="Bottom Text" className='input' id='bottom'/>

                <button onClick={getMeme} className='btn'>Get a new meme image 🖼</button>
            </div>

        </main>
    );
}
