import React from 'react';
import { Spinner } from '../Spinner';

const style: React.CSSProperties = { height: '50px', width: '196px' };

export const FollowButton: React.FC<{
  following: boolean;
  onClick: () => void;
  isLoading: boolean;
}> = ({ following, onClick, isLoading }) => {
  return (
    <button
      className={` flex justify-center items-center gap-2 text-black-1 text-lg  font-semibold rounded-10 shadow-button ${
        following ? 'bg-green-1' : 'bg-pink-1'
      }`}
      style={style}
      onClick={onClick}
    >
      {following ? 'Following' : 'Follow'}

      {isLoading && (
        <div className=" w-5 h-5">
          <Spinner />
        </div>
      )}
    </button>
  );
};
