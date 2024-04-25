'use client'
import { useEffect, useRef } from "react";
interface AudioProps {
    play: boolean;
}

const Audio = ({ play }: AudioProps) => {
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
        audioRef.current?.pause();
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
            <source src="assets/audio/embeiu.mp3" type="audio/mp3" />
            <source src="assets/audio/anhchuatoi.mp3" type="audio/mp3" />
        </audio>
    );
}

export default Audio;