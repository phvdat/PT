'use client'
import { useEffect, useState } from 'react';
import './style.css'
import { ImageType } from '@/types/common';

const INTERVAL = 5000

type ImagesProps = {
    data: string[]
}

const Images = ({ data }: ImagesProps) => {
    const [indexActive, setIndexActive] = useState(0)


    useEffect(() => {
        const timer = setInterval(() => {
            setIndexActive((prev) => {
                if (prev < data.length - 1) {
                    return prev + 1
                }
                return 0
            })
        }, INTERVAL)
        return () => clearInterval(timer)
    }, [])

    return <>
        {data ?
            data.map((item, index) => {
                return <img key={item} className={`transition-image ${index === indexActive ? 'active' : ''}`} src={item} alt="em pe and me" />
            })
            : null}
    </>;
}
export default Images;