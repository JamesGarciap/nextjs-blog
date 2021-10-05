import styles from './alert.module.scss'
import cn from 'classnames'
import React from "react";

type Props = { children: React.ReactNode, type: string };

const Alert: React.FC<Props> = ({ children, type }) => {
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}
        >
            {children}
        </div>
    )
}

export default Alert
