import { useEffect, useState } from 'react';
import IUserPreferences from '../../types/userPreferences';

function useUserPreferences() {
  const [userPreferences, setUserPreferences] = useState<IUserPreferences>({
    language: 'auto',
  });

  useEffect(() => {
    window.electron.userPreferences().then(data => setUserPreferences(data));
  }, []);

  return {
    userPreferences,
    setUserPreferences,
  };
}

export default useUserPreferences;
