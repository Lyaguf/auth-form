import { FC, ReactElement, MouseEventHandler } from 'react';

/**
 * Interface of props for IconButton.
 * 
 * @prop {string} title Title as html attr.
 * @prop {Function} onClick Click handler.
 * @prop {ReactElement} children Children.
 */
export interface IIConButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactElement;
}

/**
 * Icon as a button.
 */
export const IconButton: FC<IIConButtonProps> = ({ title, children, onClick }) => (
  <button type="button" onClick={onClick} title={title}>
    {children}
  </button>
);
