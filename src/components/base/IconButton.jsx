import React from 'react';

export default function IconButton({ icon, onClick, disabled, ariaLabel, size = 64 }) {
  return (
    <button
      className={
        `flex items-center justify-center rounded-2xl bg-white transition active:scale-95` +
        (disabled ? ' opacity-25 cursor-not-allowed' : '')
      }
      style={{ width: size, height: size }}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      type="button"
    >
      <img src={icon} alt="" style={{ width: 24, height: 24 }} />
    </button>
  );
} 