import { FC, ReactElement, MouseEventHandler } from 'react';

export interface IIConButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactElement;
}

export const IconButton: FC<IIConButtonProps> = ({ title, children, onClick }) => (
  <button type="button" onClick={onClick} title={title}>
    {children}
  </button>
);
