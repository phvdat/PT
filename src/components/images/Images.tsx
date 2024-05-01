'use client'
import { useEffect, useState } from 'react';
import './style.css';
import Image from 'next/image';

const INTERVAL = 5000

type ImagesProps = {
    data: string[]
}

const Images = ({ data }: ImagesProps) => {
    const [indexActive, setIndexActive] = useState(0)


    useEffect(() => {
        if (!data.length) return;
        console.log(data);
        const timer = setInterval(() => {
            setIndexActive((prev) => {
                if (prev < data.length - 1) {
                    return prev + 1
                }
                return 0
            })
        }, INTERVAL)
        return () => clearInterval(timer)
    }, [data])



    return <>
        {data ?
            data.map((item, index) => {
                return <Image width={600} height={600} key={item} className={`transition-image ${index === indexActive ? 'active' : ''}`} src={item} alt="em pe and me" />
            })
            : null}
    </>;
}
export default Images;