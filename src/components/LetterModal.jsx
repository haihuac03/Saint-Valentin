import React from 'react';

function LetterModal({ isOpen, onClose, content, title }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="letter-modal-overlay"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        aria-hidden="true"
      />
      <div
        className="letter-modal"
        role="dialog"
        aria-label={title || 'Lettre'}
        aria-modal="true"
      >
        <button
          type="button"
          className="letter-modal-close"
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>
        {title && <h2 className="letter-modal-title">{title}</h2>}
        <div className="letter-modal-content">
          {content}
        </div>
      </div>
    </>
  );
}

export default LetterModal;
