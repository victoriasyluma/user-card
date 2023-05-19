import React from 'react';

const style: React.CSSProperties = { height: '50px', width: '196px' };

export const Button = ({ following, handleFollowClick }) => {
  return (
    <button
      className={`text-black-1 text-lg rounded-10 
     shadow-button ${following ? 'bg-green-200' : 'bg-pink-1'}`}
      style={style}
      onClick={handleFollowClick}
    >
      {following ? 'Following' : 'Follow'}
    </button>
  );
};
