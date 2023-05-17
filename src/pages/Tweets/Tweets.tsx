import twitIcon from '../../assets/twit_header.png';
import { ReactComponent as LogoSvg } from '../../assets/logo_go.svg';
import { ReactComponent as Elipse } from '../../assets/Ellipse.svg';

export const Tweets = () => {
  return (
    <div
      className=" shadow-md rounded-20 pt-5 pl-5 pr-5 pb-8 mx-auto 
       w-1 h-1 bg-gradient-to-tr from-purple-3 via-purple-4 to-purple-5 "
    >
      <LogoSvg className=" absolute" />
      <img className=" " alt="" src={twitIcon} />
      <Elipse />
      <p>Welcome to the tweets</p>
    </div>
  );
};
