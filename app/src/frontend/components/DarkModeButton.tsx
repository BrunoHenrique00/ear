import { Switch } from 'antd';
import { useDarkMode } from '../contexts/DarkMode';

export default function DarkModeButton() {
  const { setIsDarkMode, isDarkMode } = useDarkMode();
  return (
    <Switch
      checked={isDarkMode}
      checkedChildren="Dark"
      unCheckedChildren="Light"
      onClick={() => setIsDarkMode(!isDarkMode)}
    />
  );
}
