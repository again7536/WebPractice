import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../styles/pages/Home.module.scss';

import SVG from 'react-inlinesvg';
import SlotText from '../components/home/slotText';
import Navbar from '../components/home/navbar';

interface FloatMove {
    x:number,
    y:number
};

export default function Home():JSX.Element {
    const [floatMove1, setFloatMove1] = useState<FloatMove>({x:0, y:0});
    const [floatMove2, setFloatMove2] = useState<FloatMove>({x:0, y:0});
    const [firstSlotEnd, setFirstSlotEnd] = useState<Boolean>(false);

    const firstSlotEnded = () => setFirstSlotEnd(true);

    useEffect(() => {
        const id = setInterval(()=>{  
            setFloatMove1({x:Math.random()*10-5, y:Math.random()*10-5});
            setFloatMove2({x:Math.random()*10-5, y:Math.random()*10-5});
        }, 3000);
        return ()=>clearInterval(id);
    }, [])

    return (
        <div>
            <style>{`
                #circle1{
                    transition:3.0s linear;
                    transform:translate3D(${floatMove1.x}%, ${floatMove1.y}%, 0);
                }
                #circle2 {
                    transition:3.0s linear;
                    transform:translate3D(${floatMove2.x}%, ${floatMove2.y}%, 0);
                }
                #gear1 {
                    transform-origin:67% 29%;
                    animation:rotate 2.0s forwards linear infinite;
                }
                #gear2 {
                    transform-origin:77.7% 38%;
                    animation:rotate 2.0s forwards linear reverse infinite;
                }
                @keyframes rotate {
                    from { transform:rotateZ(0deg); }
                    to   { transform:rotateZ(360deg);}
                }
            `}</style>
            <Navbar/>
            <div className={styles.banner}>
                <SlotText start={firstSlotEnd} delay={0.2} length={3} >
                    <span>I AM A</span>
                    <span>&nbsp;</span>
                    <Link href='/about'><span style={{cursor:'pointer'}}>About Me</span></Link>
                </SlotText>

                <SlotText start={firstSlotEnd} delay={0.35} length={3}> 
                    <SlotText start={true} length={5} onSlotEnd={firstSlotEnded}>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>Junior</span>
                        <span>Skilled</span>
                        <span>Frontend</span>
                    </SlotText>
                    <span>&nbsp;</span>
                    <Link href='/work'><span style={{cursor:'pointer'}}>Works</span></Link>
                </SlotText>

                <SlotText start={firstSlotEnd} delay={0.5} length={3}>
                    <span>DEVELOPER</span>
                    <span>&nbsp;</span>
                    <Link href='/contact'><span style={{cursor:'pointer'}}>Contact</span></Link>
                </SlotText>
                
                <SVG className={styles.bannerImage} src='/home/coding.svg'></SVG>
            </div>
        </div>
    );
}