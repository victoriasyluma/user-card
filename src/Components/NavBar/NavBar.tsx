import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className=" h-24 flex gap-5 ml-4 items-center">
      <NavLink className="flex text-lg  hover:text-blue-950  " to="/">
        {({ isActive }) => {
          return (
            <span className={` ${isActive ? ' text-purple-1' : ' text-white'}`}>
              Home
            </span>
          );
        }}
      </NavLink>

      <NavLink className=" flex  text-lg   hover:text-blue-950 " to="/tweets">
        {({ isActive }) => {
          return (
            <span className={` ${isActive ? 'text-purple-1' : ' text-white'}`}>
              Tweets
            </span>
          );
        }}
      </NavLink>
    </nav>
  );
};
