import React, {useEffect} from 'react';
import Link from 'next/link';

export default function Home() {

    return (
        <div>
            <h1>My blog</h1>
            <ul className='projects'>
                <li><Link href="/autumn">Autumn</Link></li>
            </ul>
            this is for test111
        </div>
    );
}