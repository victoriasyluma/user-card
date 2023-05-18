import { useLocation, useNavigate } from 'react-router-dom';
import twitIcon from '../../assets/twit_header.png';
import { ReactComponent as LogoSvg } from '../../assets/logo_go.svg';
import { ReactComponent as Elipse } from '../../assets/Ellipse.svg';
import { ReactComponent as Line } from '../../assets/line_user.svg';
import { Button } from '../../Components/Button';

// todo: this should be the tweets list, and there should be another Tweet Component
export const Tweets = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <button
        className=" bg-purple-4 rounded-10 ml-4 w-40 h-12 hover:bg-pink-1 text-white text-base"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </button>

      <div
        className="pt-7 pb-9 relative shadow-md rounded-20  mx-auto 
       w-tweet h-tweet bg-gradient-to-tr from-purple-3 via-purple-4 to-purple-5 "
      >
        <LogoSvg className="absolute top-5 left-5" />

        <div className="flex justify-center px-9">
          <img className=" " alt="" src={twitIcon} />
        </div>

        <div className="flex justify-center relative -mt-5">
          <Elipse width={80} height={80} className="z-10" />

          <div className="absolute w-full h-full flex justify-center items-center">
            <Line />
          </div>

          <div className="absolute flex w-full h-full justify-center items-center ">
            <div className=" bg-fuchsia-200 w-4 h-4 "></div>
          </div>
        </div>

        <div className=" flex items-center flex-col mt-26 ">
          <h1 className=" text-pink-1  text-20 leading-24 uppercase mb-4">
            Tweets
          </h1>
          <h2 className=" text-pink-1 text-20 leading-24 uppercase mb-26">
            Followers
          </h2>

          <Button></Button>
        </div>
      </div>
    </>
  );
};
//pt-5 px-5 pb-8
