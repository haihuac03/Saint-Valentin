import React, { useState, useRef, useEffect } from 'react';
import Book from './components/Book';
import MusicPlayer from './components/MusicPlayer';
import { PLAYLIST } from './components/MusicPlayer';
import './App.css';

function App() {
  const [showMusicModal, setShowMusicModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  const track = PLAYLIST[currentIndex];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const next = (currentIndex + 1) % PLAYLIST.length;
    setCurrentIndex(next);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = encodeURI(PLAYLIST[next].src);
      audioRef.current.loop = PLAYLIST.length === 1;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  useEffect(() => {
    if (!audioRef.current || !track) return;
    audioRef.current.src = encodeURI(track.src);
    audioRef.current.loop = PLAYLIST.length === 1;
  }, [currentIndex]);

  return (
    <div className="container">
      <Book />

      {/* Bouton flottant pour ouvrir le lecteur */}
      <button
        type="button"
        className="music-trigger"
        onClick={() => setShowMusicModal(true)}
        aria-label="Ouvrir le lecteur musical"
      >
        ♪
      </button>

      <MusicPlayer
        isOpen={showMusicModal}
        onClose={() => setShowMusicModal(false)}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onNext={nextTrack}
        currentTrack={track}
      />

      {/* Audio de fond (même instance que le modal) */}
      <audio
        ref={audioRef}
        onEnded={() => PLAYLIST.length > 1 && nextTrack()}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}

export default App;
