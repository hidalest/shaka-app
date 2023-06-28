import React, { FormEvent } from 'react';
import styles from './Button.module.scss';

interface IButton {
  children: React.ReactNode;
  className?: string;
  priority: 'primary' | 'secondary' | 'tertiary';
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onClick?: () => void;
  type: 'submit' | 'button' | 'reset';
}

const Button = (props: IButton) => {
  const { children, className, onClick, priority, type } = props;
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.mainBtn} ${
        styles[`mainBtn--${priority}`]
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
