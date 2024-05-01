'use client';
import Audio from '@/components/audio/audio';
import BubbleHearts from '@/components/bubble-heart/BubbleHearts';
import Heart from '@/components/heart/Heart';
import Images from '@/components/images/Images';
import { storage } from "@/lib/firebase";
import { listAll, ref } from "firebase/storage";
import { useEffect, useState } from 'react';

export default function Home() {
  const [play, setPlay] = useState(false);

  const [listImages, setListImages] = useState<string[]>([]);
  const [listAudio, setListAudio] = useState<string[]>([]);

  const getListAllImages = async () => {
    const listRef = ref(storage, 'images');
    try {
      const res = await listAll(listRef);
      const listImages = res.items.map((itemRef) => `https://firebasestorage.googleapis.com/v0/b/${storage.app.options.storageBucket}/o/${encodeURIComponent(itemRef.fullPath)}?alt=media`)
      setListImages(listImages);
    } catch (error) {
      // 
    }
  }

  const getListAllAudio = async () => {
    const listRef = ref(storage, 'audio');
    try {
      const res = await listAll(listRef);
      const listAudio = res.items.map((itemRef) => `https://firebasestorage.googleapis.com/v0/b/${storage.app.options.storageBucket}/o/${encodeURIComponent(itemRef.fullPath)}?alt=media`)
      setListAudio(listAudio);
    } catch (error) {
      // 
    }
  }

  useEffect(() => {
    getListAllImages()
    getListAllAudio()
  }, []);

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
