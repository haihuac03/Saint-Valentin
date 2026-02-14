import React, { useState, useRef, useEffect } from 'react';
import Book from './components/Book';
import MusicPlayer, { PLAYLIST } from './components/MusicPlayer';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  const currentTrack = PLAYLIST[currentTrackIndex];

  // Initialiser l'audio
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack.src);
      audioRef.current.addEventListener('ended', handleNext);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleNext);
        audioRef.current.pause();
      }
    };
  }, []);

  // Changer la source quand la piste change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.src;
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      }
    }
  }, [currentTrackIndex]);

  const handleTogglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
  };

  return (
    <div className="container">
      <Book />
      <MusicPlayer
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onNext={handleNext}
        currentTrack={currentTrack}
      />
    </div>
  );
}

export default App;