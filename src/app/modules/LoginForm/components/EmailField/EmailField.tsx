import { FC, useState } from 'react';
import { Input, FormField } from '@components';

export const EmailField: FC = () => {
  const [value, setValue] = useState('');
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <FormField
      label="Your email"
      field={Input}
      fieldProps={{
        value,
        type: 'email',
        name: 'email',
        onChange: handleChange,
        required: true,
        placeholder: 'Type your email',
      }}
    />
  );
};