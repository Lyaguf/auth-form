import { FC, useState } from 'react';
import { FormField } from '@components';
import { FieldWithButton } from './InputWithButton';

export const PasswordField: FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <FormField
      label="Your password"
      field={FieldWithButton}
      fieldProps={{
        value,
        onChange: handleChange,
        name: 'password',
        placeholder: 'Type your password',
      }}
    />
  );
};
