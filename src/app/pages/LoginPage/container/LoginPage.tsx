import { FC } from 'react';
import { Layout } from '../components/Layout/Layout';
import { LoginForm } from '@modules/LoginForm';

export const LoginPage: FC = () => (
  <Layout>
    <LoginForm />
  </Layout>
);
