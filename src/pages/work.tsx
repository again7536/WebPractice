import React, {useState, useEffect} from 'react';
import useWindowSize from '../components/hooks/useWindowSize';
import styles from '../styles/pages/work.module.scss';

import Navbar from '../components/home/navbar';
import Project from '../components/home/project';

export default function Work() {
    const [circleTouchStart, setCircleTouchStart] = useState<number>(0);
    const [projectTouchStart, setProjectTouchStart] = useState<number>(0);
    const [scrollCircle, setScrollCircle] = useState<number>(0);
    const [scrollProject, setScrollProject] = useState<number>(0);
    const windowSize = useWindowSize();

        //these will be replaced with DB data.
    const years = [2021, 2022, 2023];
    const images = [{year:2021, src:'/home/projects/project1.png'},
                    {year:2021, src:'/home/projects/project2.jpg'},
                    {year:2021, src:'/home/projects/project2.jpg'},];

    const rotationSpeed = 0.1;
    const offset = 180/years.length;
    const temp = Math.floor(Math.abs(scrollCircle*rotationSpeed+offset) / (360 / years.length)) % years.length;
    const yearIndex = scrollCircle*rotationSpeed+offset < 0 ? years.length - 1 - temp : temp;
    const minScrollProject = -(images.filter((data)=>data.year === years[yearIndex]).length * 0.4 - 0.92)* windowSize.outerHeight;

    useEffect(() => {
        setScrollProject(0);
    }, [yearIndex]);

    return(
        <>
        <Navbar/>
        <div className={styles.work}>
            <div className={styles.circle} 
            style={{transform:`rotate(${scrollCircle*rotationSpeed}deg)`}}
            onWheel={(e)=>setScrollCircle(scrollCircle + e.deltaY)}
            onTouchStart={e=>{setCircleTouchStart(e.touches[0].pageX)}}
            onTouchMove={e=>{setScrollCircle(scrollCircle - 0.4*(e.changedTouches[0].pageX - circleTouchStart))}}
            >
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
            <div className={styles.projectWrap}
                onWheel={(e)=>setScrollProject((scrollProject) => {
                    const copyProject = scrollProject - e.deltaY
                    if(copyProject < minScrollProject) 
                        return minScrollProject;
                    else if(copyProject > 0)
                        return 0;
                    else
                        return copyProject;
                })}
                onTouchStart={e=>{setProjectTouchStart(e.touches[0].pageY)}}
                onTouchMove={e=>setScrollProject((scrollProject) => {
                    const copyProject = scrollProject + 0.1*(e.changedTouches[0].pageY - projectTouchStart);
                    if(copyProject < minScrollProject) 
                        return minScrollProject;
                    else if(copyProject > 0)
                        return 0;
                    else
                        return copyProject;
                })}
            >
                <div className={styles.projects}
                    style={{transform:`translateY(${scrollProject}px)`}}
                >
                    <div className={styles.project}>
                        {images.map((data, index) =>
                            <Project key={index} mount={data.year === years[yearIndex]} src={data.src}/>
                        )}
                    </div>
                </div>
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