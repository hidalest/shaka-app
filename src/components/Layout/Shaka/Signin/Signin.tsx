import { FormEvent } from 'react';
import { emailRegex, passwordRegex } from '../../../../utils/regex';
import Form from '../../../UI/Form/Form';
import InputText from '../../../UI/InputText/InputText';

import styles from './Signin.module.scss';

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
const Signin = (props: ISignin) => {
  const {
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    remembermeBtn,
    forgotPasswordBtn,
  } = props.logInForm;

  const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('test');
  };

  return (
    <Form onSubmit={onSubmitLogin} className={styles.loginForm}>
      <InputText
        inputLabel={emailLabel}
        type='email'
        placeholder={emailPlaceholder}
        maxLenght={70}
        pattern={emailRegex}
        className={styles['loginForm--input']}
      />
      <InputText
        inputLabel={passwordLabel}
        type='password'
        placeholder={passwordPlaceholder}
        pattern={passwordRegex}
        className={styles['loginForm--input']}
      />

      <section className={styles['form--group']}>
        <div className={styles.checkboxGroup}>
          <input type='checkbox' name='rememberme' id='rememberme' />
          <label htmlFor='rememberme'>{remembermeBtn}</label>
        </div>

        <button className={styles.forgotPasswordBtn}>
          {forgotPasswordBtn}
        </button>
      </section>
    </Form>
  );
};

export default Signin;
