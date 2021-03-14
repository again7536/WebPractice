import React, {useEffect, useState} from 'react';
import styles from '../../styles/components/home/project.module.scss';

export default function Project({mount, src}:{mount:boolean, src:string}):JSX.Element {
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