import React from 'react';

// Pistes depuis public/musics/
export const PLAYLIST = [
  {
    src: "/musics/Elvis Presley - Can't Help Falling in Love (Lyrics) - 7clouds.mp3",
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
  },
  {
    src: "/musics/ABBA - Gimme! Gimme! Gimme! (A Man After Midnight) - AbbaVEVO.mp3",
    title: "Gimme! Gimme! Gimme! (A Man After Midnight)",
    artist: "ABBA",
  },
  {
    src: "/musics/Chella - My Darling (Official Video) - ChellaVEVO.mp3",
    title: "My Darling",
    artist: "Chella",
  },
  {
    src: "/musics/Daryl Hall & John Oates - Out Of Touch (Official HD Video) - hallandoatesVEVO.mp3",
    title: "Out Of Touch",
    artist: "Daryl Hall & John Oates",
  },
];

function MusicPlayer({ isOpen, onClose, isPlaying, onTogglePlay, onNext, currentTrack }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="music-modal-overlay" onClick={onClose} aria-hidden="true" />
      <div className="music-modal" role="dialog" aria-label="Lecteur musical">
        <button type="button" className="music-modal-close" onClick={onClose} aria-label="Fermer">
          ×
        </button>
        <div className="music-disc-container">
          <div className={`music-disc ${isPlaying ? 'music-disc--playing' : ''}`}>
            <div className="music-disc-inner" />
          </div>
        </div>
        <div className="music-info">
          <p className="music-title">{currentTrack?.title}</p>
          <p className="music-artist">{currentTrack?.artist}</p>
        </div>
        <div className="music-controls">
          <button
            type="button"
            className="music-btn music-btn--play"
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause' : 'Lecture'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button
            type="button"
            className="music-btn music-btn--next"
            onClick={onNext}
            aria-label="Piste suivante"
          >
            ⏭
          </button>
        </div>
      </div>
    </>
  );
}

export default MusicPlayer;
