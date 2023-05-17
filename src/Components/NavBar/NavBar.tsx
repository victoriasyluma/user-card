import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const NavMap = [
    { path: '/', name: 'Home' },
    { path: '/tweets', name: 'Tweets' },
  ];

  return (
    <nav>
      <ul>
        {NavMap.map(({ path, name }) => (
          <li key={path}>
            <NavLink to={path} key={path}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
