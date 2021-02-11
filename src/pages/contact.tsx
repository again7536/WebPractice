import React from 'react';
import styles from '../styles/pages/contact.module.scss';
import Navbar from '../components/home/navbar';

export default function Contact() {
    return (
        <>
        <Navbar/>
        <div className={styles.contact}>
            <h1>Contact</h1>
            <h2>On</h2>
            <div className={styles.images}>
                <div className={styles.image}>
                    <a href='https://github.com/again7536' >
                        <img src='/home/github.svg'/>
                        <p>Github</p>
                    </a>
                </div>
                <div className={styles.image}>
                    <a href='https://www.linkedin.com/in/준영-이-a3a9a2206' >
                        <img src='/home/linkedin.svg'/>
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div className={styles.image}>
                    <img src='/home/email.svg'/>
                    <p>hongxing107@gmail.com</p>
                </div>
            </div>
            <footer>
                <div>
                    <a href='https://www.freepik.com/vectors/abstract'>
                        Abstract vector created by vectorjuice - www.freepik.com
                    </a>
                </div>
                <div>
                    Icons made by 
                    <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> 
                    from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </div>
                <div>
                    Copyright &copy; 2021 Shorecrab. All rights reserved
                </div>
            </footer>
        </div>
        </>
    )
}