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
  const [play, setPlay] = useState(false);


  return (
    <>
      <div>
        <Audio play={play} data={listAudio} />
        <BubbleHearts />
        <div className='banner-conainer' onClick={() => setPlay((prev) => !prev)}>
          <div className='banner'>
            <Images data={listImages} />
            <Heart />
          </div>
        </ div>
        <GalleryImage images={listImages} />
        <Button href='/management-media' >
          <HeartFilled />
        </Button>
      </div>
    </>
  );
}

export default HomePage;