import React, {useState} from 'react';
import styles from '../styles/pages/about.module.scss';

import Navbar from '../components/home/navbar';

export default function About():JSX.Element {
    const [showCV, setShowCV] = useState<Boolean>(false);
    return (
        <>
        <Navbar/>
        <div className={styles.about}>
            <div className={styles.image}/>
            <div className={styles.intro}
                style={{
                    display:showCV?'none':undefined,
                }}
            >
                <h1>Hello!</h1>
                <p>
                    I am a frontend developer from S.Korea and 
                    attending the third year in SungKyunKwan University.
                </p>
                <p className={styles.button} onClick={()=>setShowCV(true)}>CV &rarr;</p>
            </div>
            <div className={styles.cv}
                style={{
                    display:showCV?undefined:'none',
                }}
            >
                <h1>Career</h1>
                <table>
                    <th>YEAR</th>
                    <th>HISTORY</th>
                    <tr>
                        <td>2020</td>
                        <td>SKKU SCG</td>
                    </tr>
                </table>
                <p className={styles.button} onClick={()=>setShowCV(false)}>Intro &rarr;</p>
            </div>
        </div>
        </>
    );
}

export async function getStaticProps(context) {
    return {
        props: {}
    }
}