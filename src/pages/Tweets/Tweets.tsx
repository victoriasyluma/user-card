import { useLocation, useNavigate } from 'react-router-dom';
import { Tweet } from '../../Components';
import { useEffect, useState } from 'react';
import { User, getUsers } from '../../service/Api';
import { Spinner } from '../../Components';

export const Tweets = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState<number>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadItems = async () => {
    setIsLoading(true);
    const { items, total } = await getUsers(page);

    setUsers([...users, ...items]);
    setTotal(total);
    setIsLoading(false);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    loadItems();
  }, [page]);

  const canLoadMore = total > users.length;

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

      {canLoadMore && (
        <button
          className=" flex justify-center items-center gap-2 bg-purple-4 rounded-10  w-40 h-12 hover:bg-pink-1 text-white text-base m-auto"
          onClick={loadMore}
        >
          Load more
          {isLoading && (
            <div className=" w-5 h-5">
              <Spinner />
            </div>
          )}
        </button>
      )}
    </div>
  );
};
