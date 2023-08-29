import { useEffect, useState } from 'react';
import { useData } from './dataContext';
import { useNavigate } from 'react-router-dom';
import Loader from './loader';

const Bla = () => {
  const { setData } = useData();
  const [isOnline, setIsOnline] = useState(true);
  const [wait, setWait] = useState(false);
  const navigate = useNavigate();

  const handleNetworkChange = () => {
    if (navigator.onLine) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  };
  useEffect(() => {
    (navigator as any).connection.addEventListener('change', handleNetworkChange);

    return () => {
      (navigator as any).connection.removeEventListener('change', handleNetworkChange);
    };
  }, [isOnline]);

  useEffect(() => {
    if (isOnline && wait) {
      fetch('https://catfact.ninja/fact')
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.error(err))
        .finally(() => navigate('/truc'));
    }
  }, [isOnline, wait]);

  return (
    <Loader isLoading={wait && !isOnline}>
      <>
        {!wait && (
          <div
            style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <button onMouseOver={() => setWait(true)}>Click Me!</button>
          </div>
        )}
      </>
    </Loader>
  );
};

export default Bla;
