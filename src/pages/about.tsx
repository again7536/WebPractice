import React from 'react';
import styles from '../styles/pages/about.module.scss';

import Navbar from '../components/home/navbar';

export default function About():JSX.Element {

    return (
        <>
        <Navbar/>
        <div className={styles.about}>
            <div className={styles.image}></div>
        </div>
        </>
    );
}