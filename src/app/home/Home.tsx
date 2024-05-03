'use client';
import Audio from '@/components/audio/audio';
import BubbleHearts from '@/components/bubble-heart/BubbleHearts';
import Heart from '@/components/heart/Heart';
import Images from '@/components/images/Images';
import { useState } from 'react';

interface HomeProps {
  listAudio: string[];
  listImages: string[];
}

const HomePage = ({ listAudio, listImages }: HomeProps) => {
  const [play, setPlay] = useState(false);


  return (
    <>
      <main onClick={() => setPlay((prev) => !prev)}>
        <Audio play={play} data={listAudio} />
        <BubbleHearts />
        <div className='container'>
          <Images data={listImages} />
          <Heart />
        </div>
      </main>
    </>
  );
}

export default HomePage;