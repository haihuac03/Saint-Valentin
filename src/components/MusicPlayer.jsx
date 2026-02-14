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

function MusicPlayer({ isPlaying, onTogglePlay, onNext, currentTrack }) {
  return (
    <div className="music-player-fixed">
      {/* Disque vinyle mini */}
      <div className={`music-disc-mini ${isPlaying ? 'music-disc-mini--playing' : ''}`}>
        <div className="music-disc-mini-inner" />
      </div>

      {/* Info piste */}
      <div className="music-info-mini">
        <p className="music-title-mini">{currentTrack?.title || "Aucune piste"}</p>
        <p className="music-artist-mini">{currentTrack?.artist || ""}</p>
      </div>

      {/* Contrôles */}
      <div className="music-controls-mini">
        <button
          type="button"
          className="music-btn-mini music-btn-mini--play"
          onClick={onTogglePlay}
          aria-label={isPlaying ? 'Pause' : 'Lecture'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button
          type="button"
          className="music-btn-mini"
          onClick={onNext}
          aria-label="Piste suivante"
        >
          ⏭
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer;