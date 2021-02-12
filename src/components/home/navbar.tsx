import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../../styles/components/home/navbar.module.scss';

export default function Navbar():JSX.Element {
    const [sidebar, setSidebar] = useState<Boolean>(false);

    return (
        <div className={styles.navbar}>
            <Link href={'/'}><span>S</span></Link>
            <ul className={styles.pc}>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/about'}><li>About</li></Link>
                <Link href={'/work'}><li>Works</li></Link>
                <Link href={'/contact'}><li>Contact</li></Link>
            </ul>
            <div className={styles.mobile} onClick={()=>setSidebar(true)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.sidebar} 
                style={{transform:sidebar?'translateX(-60vw)':'translateX(0vw)',}}
            >
                <div className={styles.mask} 
                    style={{display:sidebar?undefined:'none'}}
                    onClick={()=>setSidebar(false)}
                />
                <ul className={styles.menu}>
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/about'}><li>About</li></Link>
                    <Link href={'/work'}><li>Works</li></Link>
                    <Link href={'/contact'}><li>Contact</li></Link>
                </ul>
            </div>
        </div>
    );
}