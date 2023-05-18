import React from 'react';

const style: React.CSSProperties = { height: '50px', width: '196px' };

export const Button = () => {
  return (
    <button
      className="text-black-1 text-lg bg-pink-1 rounded-10 
     shadow-button "
      style={style}
    >
      Follow
    </button>
  );
};
