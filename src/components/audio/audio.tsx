'use client'
import { useEffect, useRef } from "react";
import { isMobile } from 'react-device-detect';

interface AudioProps {
  play: boolean;
  data: string[];
}

const Audio = ({ play, data }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (play) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [play]);

  const onFocus = () => {
    audioRef.current?.play();
  };

  const onBlur = () => {
    if (isMobile) {
      audioRef.current?.pause();
    }

  };

  useEffect(() => {
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    onFocus();
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return (
    <audio ref={audioRef}>
      {
        data.map((item, index) => (
          <source key={index} src={item} type="audio/mp3" />
        ))
      }
    </audio>
  );
}

export default Audio;