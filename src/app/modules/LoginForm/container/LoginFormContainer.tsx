import { FC, FormEventHandler, useId } from 'react';
import { Button, FieldSet, Loader } from '@components';
import styles from './LoginFormContainer.module.css';
import { EmailField } from '../components/EmailField/EmailField';
import { PasswordField } from '../components/PasswordField/PasswordField';
import { validateEmail } from '@utils';
import { useAsyncData } from '@hooks';

/**
 * Mocked fetch for simulating server.
 */
const sendDataMocked = (data: FormData) => {
  const fetch = new Promise((resolve, rejected) => {
    setTimeout(() => {
      const email = data.get('email');
      const password = data.get('password');

      if (!email || !password) {
        rejected("Password and email are required.");
      } else if (!validateEmail(email.toString())) {
        rejected("Email is incorrect.")
      } else {
        resolve("OK");
      }
    }, 1500);
  });

  return fetch;
}

// Maybe add action
export const LoginFormContainer: FC = () => {
  const formId = useId();
  const { isLoading, sendFetch } = useAsyncData(sendDataMocked);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault(); // disable update page
    try {
      await sendFetch(new FormData(e.target as HTMLFormElement));
      alert("You are authorized");
    } catch (err) {
      if (typeof err === "string") {
        alert("Something was wrong: \n\n" + err);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} id={formId}>
      <h1 className={styles.title}>Log in</h1>
      <FieldSet>
        <EmailField />
        <PasswordField />
      </FieldSet>
      <div className={styles.controls}>
        <Button type="submit" form={formId}>{isLoading ? <Loader /> : "Log in"}</Button>
      </div>
    </form>
  );
};
