import Logo from '../../UI/Logo/Logo';
import styles from './Login.module.scss';
import Signin from './Signin/Signin';

interface ILogin {
  loginProps: {
    signIn: {
      mainHeader: string;
      mainHeaderInstructions: string;
    };
    logInForm: {
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      remembermeBtn: string;
      forgotPasswordBtn: string;
      signInBtn: string;
      signupInstructions: string;
      signupBtn: string;
    };
  };
}

const Login = (props: ILogin) => {
  const { logInForm, signIn } = props.loginProps;

  return (
    <section className={styles.login}>
      <article>
        <div className={styles['login--title']}>
          <h2>{signIn.mainHeader}</h2>
          <p>{signIn.mainHeaderInstructions}</p>
        </div>
        <Signin logInForm={logInForm} />
      </article>
      <article>
        <Logo size='free' />
      </article>
    </section>
  );
};

export default Login;
