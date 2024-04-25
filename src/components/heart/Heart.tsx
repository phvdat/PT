'use client'
import dynamic from 'next/dynamic';
import './style.css';
const HeartScriptLazy = dynamic(() => import('./HeatScript'), { ssr: false });

const Heart = () => {
    return <>
        <canvas id="pinkboard" ></canvas>
        <HeartScriptLazy />
    </>
};

export default Heart;