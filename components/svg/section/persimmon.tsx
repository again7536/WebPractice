import React, {useRef, useState, useEffect}from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import styles from '../../../styles/components/section/persimmon.module.scss';

function Persimmon({scrollY, windowSize}) {
    const bannerRef = useRef<HTMLDivElement>();
    const articleRef = useRef<HTMLDivElement>();
    const [bannerScrollY, setbannerScrollY] = useState<number>(0);
    const [articleScrollY, setArticleScrollY] = useState<number>(0);

    useEffect(() => {
        setbannerScrollY(scrollY - bannerRef.current.offsetTop);
        setArticleScrollY(scrollY - articleRef.current.offsetTop);
    }, [scrollY]);

    /* animation variables */
    const speed = 2;
    const halfSize = (windowSize.height > windowSize.width? windowSize.height/2 : windowSize.width) / 2;

    return (
        <div className={styles.persimSection}>
            <style jsx global>{`
                #persimmon {
                    transform-box: fill-box;
                    transform-origin:${bannerScrollY < halfSize * 2? 
                        '50% 0'
                        : '50% 50%'};
                    transform:
                        rotateZ(${bannerScrollY > 0 && bannerScrollY < halfSize ? 
                            Math.sin(bannerScrollY/32) * 15 
                            : 0}deg)
                        translateY(${bannerScrollY > halfSize? 
                                bannerScrollY > halfSize * 2? 
                                halfSize/2
                                :(bannerScrollY-halfSize)/2
                            : 0}px)
                        scale(${bannerScrollY > halfSize*2 && bannerScrollY < halfSize*4? 
                            (bannerScrollY-halfSize*2)/20 + 1
                            : 1});
                }
            `}</style>
            <div ref={bannerRef} 
            className={styles.banner}
            style={{backgroundColor : bannerScrollY < halfSize ? '#5c0000' : 'orange'}}>
                <SVG src='/section/persimmon/tree3.svg' className={styles.persimmon}/>
            </div>

            <div className={styles.article} ref={articleRef}>
                <h2 className={styles.title}>persimmon</h2>
                <div className={styles.imageWrap}>
                    <img className={styles.image} 
                    style={{transform:`translateY(${-articleScrollY/8}px)`}} 
                    src='/section/persimmon/persimmon2.jpg'/>
                    <img className={styles.image} 
                    style={{transform:`translateY(${articleScrollY/8}px)`}}
                    src='/section/persimmon/persimmon1.jpg'/>
                    <img className={styles.image} 
                    style={{transform:`translateY(${-articleScrollY/8}px)`}}
                    src='/section/persimmon/persimmon3.jpg'/>
                    <img className={styles.image} 
                    style={{transform:`translateY(${articleScrollY/8}px)`}}
                    src='/section/persimmon/persimmon4.jpg'/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut dictum velit vitae nisi faucibus, ac consequat elit ullamcorper. 
                    In tempus tempor ultrices. Ut lacus enim, cursus eget condimentum et, blandit et ex. 
                    Fusce ligula urna, vulputate ut egestas vitae, elementum a arcu. 
                    Cras pulvinar turpis sit amet ex pretium facilisis. Cras lacinia dapibus pretium.
                </p>
            </div>
        </div>
    )
}

export default Persimmon;