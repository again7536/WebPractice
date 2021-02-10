import React, {useEffect, useState} from 'react';
import useWindowSize from '../hooks/useWindowSize';
import styles from '../../styles/components/home/slotText.module.scss';

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
            setTimeout(() => rollSlot(slotIndex+1), 1000);
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

export default SlotText;