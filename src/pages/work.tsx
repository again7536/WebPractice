import React, {useState, useEffect} from 'react';
import useWindowSize from '../components/hooks/useWindowSize';
import styles from '../styles/pages/work.module.scss';

export default function Work() {
    const [touchStartX, setTouchStartX] = useState<number>(0);
    const [scroll, setScroll] = useState<number>(0);
    const windowSize = useWindowSize();

    useEffect(()=> {
        const wheelMoved:EventListener = (e:WheelEvent) => setScroll(scroll + e.deltaY);
        const touchMoved:EventListener = (e:TouchEvent) => {
            if(Math.abs(e.changedTouches[0].pageX - touchStartX) > 5)
                setScroll(scroll - 4*(e.changedTouches[0].pageX - touchStartX));
            setTouchStartX(e.changedTouches[0].pageX);
        };
        window.addEventListener('wheel', wheelMoved);
        window.addEventListener('touchmove', touchMoved);
        return ()=> {
            window.removeEventListener('wheel', wheelMoved);
            window.removeEventListener('touchmove', touchMoved);
        }
    }, [scroll, touchStartX]);

    useEffect(()=> {
        const touchStarted:EventListener = (e:TouchEvent) => setTouchStartX(e.touches[0].pageX);
        window.addEventListener('touchstart', touchStarted);
        return ()=>window.removeEventListener('touchstart', touchStarted);
    }, []);

    const years = [2021, 2022, 2023];

    const rotationSpeed = 0.1;
    const offset = 180/years.length;
    const temp = Math.floor(Math.abs(scroll*rotationSpeed+offset) / (360 / years.length)) % years.length;
    const yearIndex = scroll*rotationSpeed+offset < 0 ? years.length - 1 - temp : temp;
    //these will be replaced with DB data.
    const images = [{year:2021, src:'/home/projects/project1.png'},
                    {year:2022, src:'/home/projects/project1.png'}];
    return(
        <div className={styles.work}>
            <div className={styles.circle} style={{transform:`rotate(${scroll*rotationSpeed}deg)`}}>
                <h1>works</h1>
                {years.map((year, index) => 
                    <div className={styles.years}
                        key={index}
                        style={{
                            transform:`rotate(${(windowSize.width<1025? 90 : 0) - 360/years.length * index}deg) 
                                translateX(${windowSize.width<1025?'60vw':'60vh'})
                                rotate(${windowSize.width<1025?'-90':'0'}deg) `
                        }}>
                            {year}
                    </div>
                )}
            </div>
            <div className={styles.projects}>
                <div className={styles.project}>
                    {images.map((data, index) =>
                        <Project key={index} mount={data.year === years[yearIndex]} src={data.src}/>
                    )}
                </div>
            </div>
        </div>
    );
}

function Project({mount, src}:{mount:boolean, src:string}):JSX.Element {
    const [render, setRender] = useState<boolean>(mount);

    useEffect(() => {
        let id = null;
        if(mount) 
            id = setTimeout(()=>setRender(true), 1000);
        return () => clearTimeout(id);
    }, [mount]);

    function animEnd() {
        if(!mount) setRender(false);
    }

    return(
        render && (
            <div className={mount?styles.project:styles.projectHide} onAnimationEnd={animEnd}>
                <img src={src}/>
            </div>
        )
    )
}