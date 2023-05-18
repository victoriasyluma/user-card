import { useLocation, useNavigate } from 'react-router-dom';
import { Tweet } from '../../Components';
import { useEffect, useState } from 'react';
import { User, getUsers } from '../../service/Api';

// todo: this should be the tweets list, and there should be another Tweet Component
export const Tweets = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]); // [User[], setState]

  useEffect(() => {
    (async () => {
      const users = await getUsers();

      setUsers(users);
    })();
  }, []);

  return (
    <div className="relative animate-fadeIn grid columns-1 gap-4 justify-center">
      <button
        className="absolute top-2 left-2 bg-purple-4 rounded-10 ml-4 w-40 h-12 hover:bg-pink-1 text-white text-base"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </button>

      {users.map((user) => {
        return <Tweet user={user} key={user.id} />;
      })}
    </div>
  );
};
