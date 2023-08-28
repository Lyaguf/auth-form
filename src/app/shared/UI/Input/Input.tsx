import { ChangeEventHandler, FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

/**
 * Interface of Input component.
 * @extends HTMLInpuProps
 *
 * @prop {Function} onChange A wrapper for default onChange event.
 */
export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (newValue: string) => void;
}

/**
 * A wrapper for default browser input, was made to simplify working with default input.
 */
export const Input: FC<IInputProps> = ({ onChange, ...restProps }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return <input className={styles.input} {...restProps} onChange={handleChange} />;
};
