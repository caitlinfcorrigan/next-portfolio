import Image from 'next/image';
//  Import CSS module for this component
// Any class defined in the module will be available with dot notation
import styles from '@/styles/About.module.css';
// All React hooks available in Next.js
import { useState } from 'react';

export default function About() {
    const [fontSize, setFontSize] = useState(2)
    return (
        <>
            <h1>About Me</h1>
            <p className={styles.greenColor}>I am a newly minted full stack engineer.</p>

            {/* For dynamic CSS with JS values injected into it from State */}
            <style jsx>{`
                .fontSize {
                    font-size: ${fontSize}rem;
                }
            `}</style>
            <p className='fontSize'>This is my brand statement.</p>
            <button onClick={() => setFontSize(fontSize + 1)}>Click me!</button>
            
            <br></br>
            <Image 
                src='/CandidMe.jpg'
                alt='Me at lunch'
                // Hard-coded width/height required
                width={300}
                height={400}
            />

            {/* <img src='/CandidMe.jpg' alt='Me' /> */}

            {/* For external images, update next.config.js */}
            <Image 
                src='https://placekitten.com/300/400'
                alt='Cat!'
                width={400}
                height={300}
            />
        </>
    )
}