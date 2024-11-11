import { useContext } from 'react'; //Consumer
import Icon from '@mdi/react';
import { mdiWeatherSunny, mdiWeatherNight } from '@mdi/js';
import { ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(
      theme === CONSTANTS.THEME.LIGHT
        ? CONSTANTS.THEME.DARK
        : CONSTANTS.THEME.LIGHT
    );
  };
  return (
    <header>
      <button onClick={changeTheme}>
        {theme === CONSTANTS.THEME.LIGHT ? (
          <Icon path={mdiWeatherNight} size={1} />
        ) : (
          <Icon path={mdiWeatherSunny} size={1} />
        )}
      </button>
    </header>
  );
};

export default Header;
