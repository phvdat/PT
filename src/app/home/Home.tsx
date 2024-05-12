'use client';
import Audio from '@/components/audio/audio';
import BubbleHearts from '@/components/bubble-heart/BubbleHearts';
import GalleryImage from '@/components/gallery-image/GalleryImage';
import Heart from '@/components/heart/Heart';
import Images from '@/components/images/Images';
import { HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';

interface HomeProps {
  listAudio: string[];
  listImages: string[];
}

const HomePage = ({ listAudio, listImages }: HomeProps) => {
  const shuffledImages = listImages.sort((a, b) => 0.5 - Math.random());
  const [play, setPlay] = useState(false);


  return (
    <>
      <div>
        <Audio play={play} data={listAudio} />
        <BubbleHearts />
        <div className='banner-conainer' onClick={() => setPlay((prev) => !prev)}>
          <div className='banner'>
            <Images data={shuffledImages} />
            <Heart />
          </div>
        </ div>
        <GalleryImage images={shuffledImages} />
        <Button href='/management-media' style={{ margin: '20px' }} size='large'>
          <HeartFilled />
        </Button>
      </div >
    </>
  );
}

export default HomePage;