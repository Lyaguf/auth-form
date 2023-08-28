import cx from 'classnames';
import { FC, HTMLAttributes, MouseEventHandler, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type TButtonColor = 'primary' | 'ghost';

/**
 * Interface for Button component.
 * @extends HTMLButtonAttributes
 *
 * @prop {TButtonColor} [colorType = 'primary'] ColorType of button.
 */
export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  colorType?: TButtonColor;
}

/**
 * A wrapper for default browser button.
 */
export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  colorType = 'primary',
  children,
  onClick,
  ...restProps
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onClick && onClick(event);
  };

  return (
    <button
      {...restProps}
      onClick={handleClick}
      className={cx(styles.button, styles[colorType])}
    >
      {children}
    </button>
  );
};
