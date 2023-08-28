import { FC, useId } from 'react';
import styles from './FormField.module.css';

export interface IFormFieldProps<T> {
  label: string;
  field: FC<T>;
  fieldProps: T;
}

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
      <Field {...fieldProps} id={id} />
    </div>
  );
};
