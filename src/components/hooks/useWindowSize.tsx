import React, {useEffect, useState} from 'react';

interface WindowSize{
    width: number,
    height: number
}

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSize>({width:0, height:0});

    const resized = () => {
        setWindowSize({width:window.outerWidth, height:window.outerHeight});
    }

    useEffect(()=> {
        resized();
    }, [])

    useEffect(()=>{
        window.addEventListener('resize', resized);
        return () => window.removeEventListener('resize', resized);
    }, [windowSize]);

    return windowSize;
}