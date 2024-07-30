import { FC, useState } from 'react';
import { Input, IInputProps } from '@components';
import { EyeClosedIcon, EyeOpenedIcon } from '@icons';
import { IconButton } from '../../../../shared/UI/IconButton/IconButton';
import styles from './PasswordField.module.css';

export const FieldWithButton: FC<Omit<IInputProps, 'type'>> = (inputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={styles.inputWithButton}>
      <Input {...inputProps} type={showPassword ? 'text' : 'password'} />
      <div className={styles.icon}>
        <IconButton
          onClick={handleClick}
          title={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ?  <EyeClosedIcon /> : <EyeOpenedIcon />}
        </IconButton>
      </div>
    </div>
  );
};
