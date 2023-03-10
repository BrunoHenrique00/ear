import { createContext, ReactNode, useContext } from 'react';
import IUserPreferences, { ILanguages } from '../../types/userPreferences';
import useUserPreferences from '../hooks/useUserPreferences';

interface UserPreferencesContextProps {
  userPreferences: IUserPreferences;
  setUserPreferences: React.Dispatch<React.SetStateAction<IUserPreferences>>;
  changeLanguage: (language: ILanguages) => void;
}

const UserPreferencesContext = createContext<UserPreferencesContextProps>(
  {} as UserPreferencesContextProps,
);

const UserPreferencesProvider = ({ children }: { children: ReactNode }) => {
  const { setUserPreferences, userPreferences } = useUserPreferences();

  function changeLanguage(language: ILanguages) {
    window.electron.setLanguage(language);
    setUserPreferences({
      ...userPreferences,
      language,
    });
  }

  return (
    <UserPreferencesContext.Provider
      value={{ userPreferences, setUserPreferences, changeLanguage }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

export default UserPreferencesProvider;

export function useUser() {
  return useContext(UserPreferencesContext);
}
