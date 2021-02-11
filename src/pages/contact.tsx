import React from 'react';
import styles from '../styles/pages/contact.module.scss';
import Navbar from '../components/home/navbar';

export default function Contact() {
    return (
        <>
        <Navbar/>
        <div className={styles.contact}>
            <br/><br/>
            <a href='https://www.freepik.com/vectors/abstract'>
                Abstract vector created by vectorjuice - www.freepik.com
            </a>
        </div>
        </>
    )
}