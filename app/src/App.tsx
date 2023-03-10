import { ConfigProvider, theme } from 'antd';
import * as ReactDOM from 'react-dom';
import DarkModeProvider, { useDarkMode } from './frontend/contexts/DarkMode';
import UserPreferencesProvider from './frontend/contexts/UserPreferences';
import Home from './frontend/pages/Home';

const App = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#424242',
        },
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <UserPreferencesProvider>
        <Home />
      </UserPreferencesProvider>
    </ConfigProvider>
  );
};

function render() {
  ReactDOM.render(
    <DarkModeProvider>
      <App />
    </DarkModeProvider>,
    document.body,
  );
}

render();
