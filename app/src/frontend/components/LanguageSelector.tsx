import { Select } from 'antd';
import { ILanguages } from '../../types/userPreferences';
import { useUser } from '../contexts/UserPreferences';

interface OptionsProps {
  label: string;
  value: string;
}
const options: OptionsProps[] = [
  { value: 'auto', label: 'Automático' },
  { value: 'pt', label: 'Português' },
  { value: 'en', label: 'Inglês' },
  { value: 'es', label: 'Espanhol' },
  { value: 'fr', label: 'Francês' },
  { value: 'ru', label: 'Russo' },
  { value: 'de', label: 'Alemão' },
];

export default function LanguageSelector() {
  const { userPreferences, changeLanguage } = useUser();

  return (
    <Select
      defaultValue="auto"
      value={userPreferences.language}
      placeholder="Selecione o idioma preferido"
      options={options}
      onChange={value => changeLanguage(value as ILanguages)}
    />
  );
}
