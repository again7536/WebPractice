import React, {useEffect, useState} from 'react';
import useWindowSize from '../hooks/useWindowSize';
import styles from '../../styles/components/home/slotText.module.scss';

interface Props {
    start:Boolean,
    length:number,
    onSlotEnd?:()=>void,
    delay?:number
}

const SlotText:React.FC<Props> = ({start, length, delay, onSlotEnd, children}):JSX.Element => {
    const [slotIndex, setSlotIndex] = useState(0);
    const windowSize = useWindowSize();

    useEffect( () => {
        if(start) {
            if(delay !== undefined) {
                const id = setTimeout(()=> {
                    rollSlot(slotIndex);
                }, delay*1000);
                return () => clearTimeout(id);
            }
            else rollSlot(slotIndex);
        }
    }, [start]);

    const rollSlot = (slotIndex) => {
        if(slotIndex < length-1) {
            setSlotIndex(slotIndex+1)
            setTimeout(() => rollSlot(slotIndex+1), 1000);
        }
        else if(onSlotEnd !== undefined) onSlotEnd();
    }

    const minUnit = windowSize.height > windowSize.width ? 'vw': 'vh';

    return (
        <div className={styles.slotWrap}>
            <div className={styles.slot}
                style={{transform:`translateY(${-20 * slotIndex}${minUnit})`}}
            >
                {children}
            </div>
        </div>
    );
}

export default SlotText;