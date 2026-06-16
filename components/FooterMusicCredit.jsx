'use client';

import { useRef, useState } from 'react';

export default function FooterMusicCredit() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.28;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="toni-credit">
      <audio ref={audioRef} src="/assets/audio/buffalo-background-music.mp3" loop preload="auto" />
      <span>
        Crafted with creativity by <strong>Toni Naumoski.</strong>
      </span>
      <button
        className="toni-credit__music"
        type="button"
        onClick={toggleMusic}
        aria-pressed={isPlaying}
      >
        Music {isPlaying ? 'On' : 'Off'}
      </button>
    </div>
  );
}
