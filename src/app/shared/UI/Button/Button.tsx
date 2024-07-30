import cx from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type TButtonColor = 'primary' | 'ghost';

/**
 * Interface for Button component.
 * @extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
 *
 * @prop {TButtonColor} [colorType = 'primary'] ColorType of button.
 */
export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  colorType?: TButtonColor;
}

/**
 * A wrapper for default browser button.
 */
export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  colorType = 'primary',
  children,
  ...restProps
}) => {

  return (
    <button
      {...restProps}
      type={restProps?.type}
      className={cx(styles.button, styles[colorType])}
    >
      {children}
    </button>
  );
};
