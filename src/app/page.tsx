'use client'
import Audio from '@/components/audio/audio';
import { useImages } from './hooks/useImages';
import BubbleHearts from '@/components/bubble-heart/BubbleHearts';
import Heart from '@/components/heart/Heart';
import styles from "./page.module.css";
import { useState } from 'react';
import Images from '@/components/images/Images';


export default function Home() {
  const [play, setPlay] = useState(false);
  const { data } = useImages();

  return (<main onClick={() => setPlay(prev => !prev)}>
    <Audio play={play} />
    <BubbleHearts />
    <div className={styles.heartContainer}>
      <Images data={data} />
      <Heart />
    </div>
  </main>
  );
}
