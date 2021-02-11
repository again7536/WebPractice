import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/home/navbar.module.scss';

export default function Navbar():JSX.Element {
    return (
        <div className={styles.navbar}>
            <Link href={'/'}><span>S</span></Link>
            <ul className={styles.pc}>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/about'}><li>About</li></Link>
                <Link href={'/work'}><li>Works</li></Link>
                <Link href={'/contact'}><li>Contact</li></Link>
            </ul>
            <div className={styles.mobile}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}