import { FormEvent, useState } from 'react';
import Form from '../../../UI/Form/Form';
import InputText from '../../../UI/InputText/InputText';
import Button from '../../../UI/Button/Button';

import styles from './SignupForm.module.scss';
import { Link } from 'react-router-dom';
interface ISignup {
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
}
interface IinputValue {
  isValid: null | boolean;
  value: string;
}

const SignupForm = (props: ISignup) => {
  const [passwordValue, setPasswordValue] = useState<IinputValue>({
    isValid: false,
    value: '',
  });
  const [usernameValue, setUsernameValue] = useState<IinputValue>({
    isValid: false,
    value: '',
  });
  const [userDOBValue, setUserDOB] = useState<IinputValue>({
    isValid: false,
    value: '',
  });
  const {
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    signupBtn,
    nameLabel,
    namePlaceholder,
    dateOfBirthLabel,
    dateOfBirthPlaceholder,
    signInInstructions,
    signInBtn,
  } = props.signupForm;

  const onUsernameValue = (value: IinputValue) => setUsernameValue(value);
  const onPasswordValue = (value: IinputValue) => setPasswordValue(value);
  const onUserDOB = (value: IinputValue) => setUserDOB(value);

  const onSignupHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(usernameValue, passwordValue, userDOBValue);
  };

  return (
    <Form onSubmit={onSignupHandler} className={styles.loginForm}>
      <InputText
        inputLabel={nameLabel}
        type='text'
        placeholder={namePlaceholder}
        maxLenght={70}
        className={styles['loginForm--input']}
        inputStatusReturn={onUsernameValue}
        autocomplete='username'
        validateInput
      />
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
        autocomplete='new-password'
        validateInput
        showRequirements
      />

      <InputText
        inputLabel={dateOfBirthLabel}
        type='date'
        placeholder={dateOfBirthPlaceholder}
        className={styles['loginForm--input']}
        inputStatusReturn={onUserDOB}
        autocomplete='bday'
        validateInput
        showRequirements
      />

      <section className={styles['form--group']}>
        <Button priority='primary' onSubmit={onSignupHandler}>
          {signupBtn}
        </Button>
        <div className={styles.checkboxGroup}>
          <p>{signInInstructions}</p>
          <Link to='/' className={styles.goToSignin}>
            {signInBtn}
          </Link>
        </div>
      </section>
    </Form>
  );
};

export default SignupForm;
