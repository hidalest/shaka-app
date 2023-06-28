import { FormEvent, useState } from 'react';
import Form from '../../../UI/Form/Form';
import InputText from '../../../UI/InputText/InputText';

import styles from './Signin.module.scss';
import Button from '../../../UI/Button/Button';
import { Link } from 'react-router-dom';

interface ISignin {
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
}

interface IinputValue {
  isValid: null | boolean;
  value: string;
}
const Signin = (props: ISignin) => {
  const [passwordValue, setPasswordValue] = useState<IinputValue>({
    isValid: false,
    value: '',
  });
  const [usernameValue, setUsernameValue] = useState<IinputValue>({
    isValid: false,
    value: '',
  });
  const {
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    remembermeBtn,
    forgotPasswordBtn,
    signInBtn,
    signupBtn,
    signupInstructions,
  } = props.logInForm;

  const onUsernameValue = (value: IinputValue) => setUsernameValue(value);
  const onPasswordValue = (value: IinputValue) => setPasswordValue(value);

  const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(passwordValue.isValid, passwordValue.value);
    console.log(usernameValue.isValid, usernameValue.value);
  };

  const onForgotPassword = () => {
    console.log('Forgot password');
  };

  return (
    <Form onSubmit={onSubmitLogin} className={styles.loginForm}>
      <InputText
        inputLabel={emailLabel}
        type='email'
        placeholder={emailPlaceholder}
        maxLenght={70}
        className={styles['loginForm--input']}
        inputStatusReturn={onUsernameValue}
        autocomplete='username'
      />
      <InputText
        inputLabel={passwordLabel}
        type='password'
        placeholder={passwordPlaceholder}
        className={styles['loginForm--input']}
        inputStatusReturn={onPasswordValue}
        autocomplete='current-password'
      />

      <section className={styles['form--group']}>
        <div className={styles.checkboxGroup}>
          <input type='checkbox' name='rememberme' id='rememberme' />
          <label htmlFor='rememberme'>{remembermeBtn}</label>
        </div>

        {/* <Link to='/forgotPassword' element={<Signup></Signup>}></Link> */}
        <p>{forgotPasswordBtn}</p>
      </section>
      <section className={styles.loginButtons}>
        <Button
          priority='primary'
          onClick={onForgotPassword}
          type='button'
          className={styles.loginBtn}
        >
          {signInBtn}
        </Button>

        <div className={styles.signupInstructions}>
          <p>{signupInstructions}</p>
          <Link to='/signup'>{signupBtn}</Link>
        </div>
      </section>
    </Form>
  );
};

export default Signin;
