import { FC } from 'react';
import { Button } from '@components';
import styles from './LoginFormContainer.module.css';
import { EmailField } from '../components/EmailField/EmailField';
import { PasswordField } from '../components/PasswordField/PasswordField';

export const LoginFormContainer: FC = () => (
  <form className={styles.form}>
    <h1 className={styles.title}>Log in</h1>
    <div className={styles.fieldset}>
      <EmailField />
      <PasswordField />
    </div>
    <div className={styles.controls}>
      <Button>Log in</Button>
    </div>
  </form>
);
