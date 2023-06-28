import { useAppDispatch, useAppSelector } from '../../../hooks/store_hooks';
import { appActions } from '../../../store/store';
import Logo from '../../UI/Logo/Logo';
import styles from './Header.module.scss';

interface IHeader {
  headerProps: {
    title: string;
    google_dark_icon: string;
    google_light_icon: string;
  };
}
const Header = (props: IHeader) => {
  const currentTheme = useAppSelector((state) => state.app.theme);
  const dispatch = useAppDispatch();
  const { title, google_dark_icon, google_light_icon } = props.headerProps;

  const setThemeIcon =
    currentTheme == 'dark' ? google_light_icon : google_dark_icon;

  const onChangeThemeHandler = () => dispatch(appActions.changeTheme());

  return (
    <header className={styles.header}>
      <h1>
        {title}
        <Logo size='small' />
      </h1>
      <button className={styles.btnTheme} onClick={onChangeThemeHandler}>
        <span className='material-symbols-outlined'>{setThemeIcon}</span>
      </button>
    </header>
  );
};

export default Header;
