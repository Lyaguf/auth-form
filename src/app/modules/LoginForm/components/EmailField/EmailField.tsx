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
        onChange: handleChange,
        placeholder: 'Type your email',
      }}
    />
  );
};

// <div>
//   <label className={styles.label} htmlFor="email">
//     Email
//   </label>
//   <Input
//     placeholder="Your email"
//     type="email"
//     id="email"
//     name="email"
//     onChange={() => {
//       console.log('test');
//     }}
//   />
// </div>
