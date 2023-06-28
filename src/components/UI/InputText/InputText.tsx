import { ChangeEvent, useEffect, useState } from 'react';
import useBoolean from '../../../hooks/useBoolean';
import styles from './InputText.module.scss';
import {
  emailRegex,
  passwordRegex,
  safeDateRegex,
  safeTextRegex,
} from '../../../utils/regex';

interface InputTextProps {
  type?: 'text' | 'date' | 'password' | 'email';
  inputLabel?: string;
  placeholder?: string;
  maxLenght?: number;
  minLength?: number;
  className?: string;
  showRequirements?: boolean;
  validateInput?: boolean;
  autocomplete: 'new-password' | 'current-password' | 'username' | 'bday';
  inputStatusReturn: (status: {
    isValid: boolean | null;
    value: string;
  }) => void;
}

enum InputType {
  PASSWORD_TYPE = 'password',
  TEXT_TYPE = 'text',
  EMAIL_TYPE = 'email',
  DATE_TYPE = 'date',
}

enum VisibilityIcon {
  HIDE = 'visibility_off',
  SHOW = 'visibility',
}

type PasswordVerification = null | boolean;

const InputText = (props: InputTextProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setInputValid] = useState<PasswordVerification>(null);
  const { PASSWORD_TYPE, TEXT_TYPE, EMAIL_TYPE, DATE_TYPE } = InputType;
  const [initialRender, setInitialRender] = useState(true);
  const { HIDE, SHOW } = VisibilityIcon;
  const {
    type = TEXT_TYPE,
    inputLabel = '',
    placeholder,
    minLength = 1,
    maxLenght = 20,
    className,
    showRequirements = false,
    validateInput = false,
    autocomplete,
    inputStatusReturn,
  } = props;

  const {
    status,
    handler: { toggler },
  } = useBoolean(false);

  const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  //Checks for the input entered every 500ms after the last button pressend
  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      const value = inputValue.trim();
      const waitInput = setTimeout(() => {
        const isPasswordValid =
          type === PASSWORD_TYPE && passwordRegex.test(value);
        const isTextValid = type === TEXT_TYPE && safeTextRegex.test(value);
        const isEmailValid = type === EMAIL_TYPE && emailRegex.test(value);
        const isDateValid = type === DATE_TYPE && safeDateRegex.test(value);
        if (isPasswordValid || isTextValid || isEmailValid || isDateValid) {
          setInputValid(true);
        } else setInputValid(false);
      }, 500);
      return () => {
        clearTimeout(waitInput);
      };
    }
  }, [EMAIL_TYPE, PASSWORD_TYPE, TEXT_TYPE, inputValue, type]); // eslint-disable-line

  useEffect(() => {
    inputStatusReturn({ isValid: isInputValid, value: inputValue });
  }, [inputValue, isInputValid]); // eslint-disable-line

  const showPassword = status ? TEXT_TYPE : PASSWORD_TYPE;
  const showRequirementsOnInput = type === PASSWORD_TYPE && showRequirements;
  const passwordClass =
    isInputValid === false && validateInput ? 'invalid' : '';

  return (
    <div className={`${styles.inputText} ${className}`}>
      {inputLabel && <label htmlFor='inputText'>{inputLabel}</label>}
      <input
        type={type === PASSWORD_TYPE ? showPassword : type}
        id='inputText'
        placeholder={placeholder}
        maxLength={maxLenght}
        minLength={minLength}
        value={inputValue}
        onChange={onInputValueChange}
        className={styles[passwordClass]}
        autoComplete={autocomplete}
      />

      {type === PASSWORD_TYPE && (
        <button onMouseDown={toggler} className={styles.btnShowPassword}>
          <span className='material-symbols-outlined'>
            {status ? HIDE : SHOW}
          </span>
        </button>
      )}

      {showRequirementsOnInput && (
        <>
          <article
            className={`${styles['password-requirement-group']} ${
              styles[isInputValid ? '' : '']
            }`}
          >
            <span className='material-symbols-outlined'>check_circle</span>
            <span>It should have a minimum length of 8 characters.</span>
          </article>
          <article
            className={`${styles['password-requirement-group']} ${
              styles[isInputValid ? '' : '']
            }`}
          >
            <span className='material-symbols-outlined'>check_circle</span>
            <span>It should contain at least one letter.</span>
          </article>
          <article
            className={`${styles['password-requirement-group']} ${
              styles[isInputValid ? '' : '']
            }`}
          >
            <span className='material-symbols-outlined'>check_circle</span>
            <span>It should contain at least one letter.</span>
          </article>
        </>
      )}
    </div>
  );
};

export default InputText;
