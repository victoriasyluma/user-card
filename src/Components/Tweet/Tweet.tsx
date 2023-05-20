import React, { useState, useEffect } from 'react';
import twitIcon from '../../assets/twit_header.png';
import { ReactComponent as LogoSvg } from '../../assets/logo_go.svg';
import { ReactComponent as Elipse } from '../../assets/Ellipse.svg';
import { ReactComponent as Line } from '../../assets/line_user.svg';
import { Button } from '../../Components/Button';
import { User, putUser } from '../../service/Api';

export const Tweet: React.FC<{ user: User }> = ({ user: userParam }) => {
  const [user, setUser] = useState<User>(userParam);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleFollowClick = async () => {
    try {
      if (isUpdating) {
        return;
      }

      setIsUpdating(true);

      let updatedUser: User = { ...user, following: !user.following };

      if (updatedUser.following) {
        updatedUser.followers = user.followers + 1;
      } else {
        updatedUser.followers = user.followers - 1;
      }

      updatedUser = await putUser(updatedUser);

      setUser(updatedUser);
    } catch (error) {
      throw error;
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div
      className="pt-7 pb-9 relative shadow-md rounded-20 
       w-tweet h-tweet bg-gradient-to-tr from-purple-3 via-purple-4 to-purple-5 "
    >
      <LogoSvg className="absolute top-5 left-5" />

      <div className="flex justify-center px-9">
        <img className=" " alt="" src={twitIcon} />
      </div>

      <div className="flex justify-center relative -mt-5">
        <Elipse className="z-10  w-20 h-20" />

        <div className="absolute w-full h-full flex justify-center items-center">
          <Line />
        </div>

        <div className="absolute flex w-full h-full justify-center items-center ">
          <img className=" w-15 h-15 rounded-full" alt="" src={user.avatar} />
        </div>
      </div>

      <div className=" flex items-center flex-col mt-26 ">
        <h1 className=" text-pink-1  text-20 leading-24 uppercase mb-4">
          {user.tweets} Tweets
        </h1>
        <h2 className=" text-pink-1 text-20 leading-24 uppercase mb-26">
          {user.followers} Followers
        </h2>

        <Button
          following={user.following}
          onClick={handleFollowClick}
          isLoading={isUpdating}
        ></Button>
      </div>
    </div>
  );
};
