import React from 'react';
import styles from '../styles/pages/about.module.scss';

import Navbar from '../components/home/navbar';

export default function About():JSX.Element {

    return (
        <>
        <Navbar/>
        <div className={styles.about}>
            <div className={styles.image}/>
            <div className={styles.intro}>
                <h1>Hello!</h1>
                <p>
                    I am a frontend developer from S.Korea and 
                    attending the third year in SungKyunKwan University.
                </p>
            </div>
        </div>
        </>
    );
}