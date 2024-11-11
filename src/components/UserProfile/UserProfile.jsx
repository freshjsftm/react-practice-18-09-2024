import PropTypes from 'prop-types';
import { useState, useContext } from 'react'; //hook
import Icon from '@mdi/react';
import { mdiThumbUp, mdiThumbDown } from '@mdi/js';
import cx from 'classnames';
import styles from './UserProfile.module.scss';
import { ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';

const UserProfile = (props) => {
  const {
    user: { name = 'Anonim', age = 100, email = 'anonim@gmail.com' },
  } = props;
  const [isSelect, setIsSelect] = useState(false);
  const [amount, setAmount] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  const changeIsSelect = () => {
    setIsSelect(!isSelect);
  };
  const addLike = (event) => {
    event.stopPropagation();
    setAmount(amount + 1);
  };
  const subLike = (event) => {
    event.stopPropagation();
    if (amount > 0) {
      setAmount(amount - 1);
    } else {
      setAmount(0);
    }
  };
  const changeIsDelete = () => {
    setIsDelete(true);
  };

  const articleClasses = cx(styles['user-profile'], {
    [styles['select']]: isSelect,
    [styles['noselect']]: !isSelect,
    [styles['light']]: theme === CONSTANTS.THEME.LIGHT,
    [styles['dark']]: theme === CONSTANTS.THEME.DARK,
  })

  if (isDelete) return null;
  return (
    <article onClick={changeIsSelect} className={articleClasses}>
      <button onClick={changeIsDelete}>X</button>
      <h2>
        name: <span>{name}</span>
      </h2>
      <h3>age: {age}</h3>
      <p>email: {email}</p>
      <p className={styles.flex}>
        <span onClick={addLike}>
          <Icon path={mdiThumbUp} size={1} />
        </span>
        <span className={styles.amount}>{amount}</span>
        <span onClick={subLike}>
          <Icon path={mdiThumbDown} size={1} />
        </span>
      </p>
    </article>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    email: PropTypes.string.isRequired,
  }),
};

export default UserProfile;
