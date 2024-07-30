import { FC, useId } from 'react';
import styles from './FormField.module.css';

/**
 * Interface of props for FormField.
 * 
 * @template T
 * 
 * @prop {string} label Label of input.
 * @prop {FC} field Component for Field.
 * @prop {T} fieldProps Props for FieldComponent.
 */
export interface IFormFieldProps<T> {
  label: string;
  field: FC<T>;
  fieldProps: T;
}

/**
 * FormField.
 */
export const FormField = <T,>({
  label,
  field: Field,
  fieldProps,
}: IFormFieldProps<T>) => {
  const id = useId();

  return (
    <div className={styles.formField}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <Field {...fieldProps} id={id}aria-label={label} />
    </div>
  );
};
