import { useContext } from 'react'; //Consumer
import { ThemeContext } from '../../contexts';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <header>
      <button onClick={changeTheme}>
        {theme === 'light' ? 'dark' : 'light'}
      </button>
    </header>
  );
};

export default Header;
