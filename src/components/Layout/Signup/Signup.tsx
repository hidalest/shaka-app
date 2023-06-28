import styles from './Signup.module.scss';
import SignupForm from './SignupForm/SignupForm';

interface ISignUp {
  signupProps: {
    signup: {
      mainHeader: string;
      mainHeaderInstructions: string;
    };

    signupForm: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      signupBtn: string;
      signInBtn: string;
      dateOfBirthLabel: string;
      dateOfBirthPlaceholder: string;
      signInInstructions: string;
    };
  };
}

const Signup = (props: ISignUp) => {
  const { signup, signupForm } = props.signupProps;

  return (
    <section className={styles.login}>
      <article>
        <div className={styles['login--title']}>
          <h2>{signup.mainHeader}</h2>
          <p>{signup.mainHeaderInstructions}</p>
        </div>
        <SignupForm signupForm={signupForm} />
      </article>
      <article>logo</article>
    </section>
  );
};

export default Signup;
