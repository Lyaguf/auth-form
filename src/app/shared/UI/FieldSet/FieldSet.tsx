import { FC, PropsWithChildren } from "react";
import cx from "classnames";
import styles from './FieldSet.module.css';

/** Gap size. */
export type GutterSize = "small" | "large" | "none";

/**
 * Interface of props for fieldset.
 * 
 * @prop {GutterSize} [gutter = 'small'] Gap size between elements.
 */
export interface IFieldSetProps {
    gutter?: GutterSize;
}

export const FieldSet: FC<PropsWithChildren<IFieldSetProps>> = ({ children, gutter = 'small' }) => {
    return (
        <div className={cx(styles.fieldset, styles[gutter])}>
            {children}
        </div>
    )
}