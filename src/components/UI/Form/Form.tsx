import { FormEvent, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  className: string;
}
const Form = (props: FormProps) => {
  const { children, onSubmit, className } = props;
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
