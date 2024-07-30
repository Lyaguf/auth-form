import { FC } from "react";
import styles from './Loader.module.css';

/**
 * Loader.
 */
export const Loader: FC = () => {
    return <div className={styles.dotContainer}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
    </div>
}