import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../styles/pages/Home.module.scss';
import useWindowSize from '../components/hooks/useWindowSize';
import SVG from 'react-inlinesvg';

interface Props {
    texts:string[];
}

const SlotText = ({texts}:Props):JSX.Element => {
    const [slotIndex, setSlotIndex] = useState(-2);
    const windowSize = useWindowSize();

    useEffect( () => rollSlot(slotIndex), []);

    const rollSlot = (slotIndex) => {
        if(slotIndex < texts.length-1) {
            setSlotIndex(slotIndex+1)
            setTimeout(() => rollSlot(slotIndex+1), 1200);
        }
    }

    const elems = texts.map((text, idx) => {
        return <span key={idx}>{text}</span>
    });

    const minUnit = windowSize.height > windowSize.width ? 'vw': 'vh';

    return (
        <div className={styles.slotWrap}>
            <div className={styles.slot}
                style={{transform:`translateY(${-20 * slotIndex}${minUnit})`}}
            >
                {elems}
            </div>
        </div>
    );
}

export default function Home():JSX.Element {

    return (
        <div>
            <div className={styles.banner}>
                <span>I AM A</span>
                <SlotText texts={['Junior', 'Trendy', 'Skilled', 'FrontEnd']}/>
                <span>DEVELOPER</span>
                <SVG className={styles.bannerImage} src='/home/coding.svg'></SVG>
            </div>
            <div className={styles.projects}>
                <h1>works</h1>
                <div className={styles.cardWrap}>
                    <div className={styles.card}>
                        <img src='/home/projects/project1.png'></img>
                    </div>
                    <div className={styles.card}>
                        <img src='/home/projects/project1.png'></img>
                    </div>
                    <div className={styles.card}>
                        <img src='/home/projects/project1.png'></img>
                    </div>
                    <div className={styles.card}>
                        <img src='/home/projects/project1.png'></img>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <Link href="/autumn">Autumn</Link>
                <a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by vectorjuice - www.freepik.com</a>
            </div>
        </div>
    );
}