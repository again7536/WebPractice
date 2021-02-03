import React, {useRef, useState, useEffect}from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import styles from '../../styles/components/autumn/apple.module.scss';

function Apple({scrollY, windowSize}) {
    const bannerRef = useRef<HTMLDivElement>();
    const articleRef = useRef<HTMLDivElement>();
    const [bannerScrollY, setBannerScrollY] = useState<number>(0);
    const [articleScrollY, setArticleScrollY] = useState<number>(0);

    useEffect(() => {
        setBannerScrollY(scrollY - bannerRef.current.offsetTop);
        setArticleScrollY(scrollY - articleRef.current.offsetTop);
    },[scrollY]);

    /* animation variables */
    const halfSize = (windowSize.height > windowSize.width? windowSize.height : windowSize.width) / 2;

    const appleStyle:React.CSSProperties = {
        transform:`
            translateX(${bannerScrollY <  windowSize.width / 2 ? 
                bannerScrollY*2 
                : windowSize.width}px)
            translateY(${bannerScrollY > 0 ?
                bannerScrollY < halfSize*2 ? 
                bannerScrollY
                : halfSize*2
            : 0}px)
            rotateZ(${bannerScrollY > 0 && bannerScrollY < windowSize.width / 2 ?
                 bannerScrollY * 1440 / windowSize.width 
                 : 360}deg)
            scale(${ bannerScrollY > 0 && bannerScrollY > windowSize.width / 2 ? 
                    bannerScrollY < halfSize*2 ? 
                    1 + (bannerScrollY - windowSize.width / 2) / 64 
                    : 1 + (halfSize + windowSize.width / 2) / 64
                : 1})`,
        transformOrigin:'center center'
    }

    return (
        <div className={styles.appleSection}>
            <div ref={bannerRef} className={styles.banner}>
                <h1>Foods in season</h1>
                <div className={styles.appleWrap}>
                    <SVG style={bannerScrollY > -500 ? appleStyle : undefined}
                    className={bannerScrollY > halfSize * 2 ? styles.appleMasked : styles.apple} 
                    src='/autumn/section/apple/apple.svg'/>
                </div>

            </div>
            <div ref={articleRef} 
                className={styles.article} 
                style={{backgroundColor: bannerScrollY >  halfSize * 2 ? '#5c0000' : '#ff0000'}}>
                <h2 className={styles.title} style={{opacity: bannerScrollY > windowSize.width ? 1 : 0}}>
                    Apple
                </h2>
                <div className={styles.imageWrap}>
                    <img className={styles.image} 
                    style={{transform:`translateY(${-articleScrollY/8}px)`}} 
                    src='/autumn/section/apple/apple_pick.jpg'/>
                    <img className={styles.image} 
                    style={{transform:`translateY(${articleScrollY/8}px)`}}
                    src='/autumn/section/apple/apple_pick2.webp'/>
                    <img className={styles.image} 
                    style={{transform:`translateY(${-articleScrollY/8}px)`}}
                    src='/autumn/section/apple/apple_pick3.jpeg'/>
                    <img className={styles.image} 
                    style={{transform:`translateY(${articleScrollY/8}px)`}}
                    src='/autumn/section/apple/apple_pick4.jpg'/>
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

export default Apple;