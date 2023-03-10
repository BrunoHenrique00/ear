import { useEffect, useState } from 'react';

function useFirstTime() {
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);

  useEffect(() => {
    window.electron.checkFirstTime().then(bool => setIsFirstTime(bool));
  }, []);

  return {
    isFirstTime,
    setIsFirstTime,
  };
}

export default useFirstTime;
