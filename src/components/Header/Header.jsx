import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '@mdi/react';
import { mdiWeatherSunny, mdiWeatherNight } from '@mdi/js';
import CONSTANTS from '../../constants';
import { withTheme, withUserAccount } from '../HOCs';
import styles from './Header.module.scss';

const Header = (props) => {
  const {theme, setTheme, user: { firstName, lastName }, } = props;
  const changeTheme = () => {
    setTheme(
      theme === CONSTANTS.THEME.LIGHT
        ? CONSTANTS.THEME.DARK
        : CONSTANTS.THEME.LIGHT
    );
  };
  const headerClasses = cx(styles.header, {
    [styles['light']]: theme === CONSTANTS.THEME.LIGHT,
    [styles['dark']]: theme === CONSTANTS.THEME.DARK,
  });
  return (
    <header className={headerClasses}>
      <p>
        Hi! {firstName} {lastName}
      </p>
      <span onClick={changeTheme} className={styles.themeBtn}>
        {theme === CONSTANTS.THEME.LIGHT ? (
          <Icon path={mdiWeatherNight} size={1} />
        ) : (
          <Icon path={mdiWeatherSunny} size={1} />
        )}
      </span>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

export default withUserAccount(withTheme(Header));
