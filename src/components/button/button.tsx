import React, { CSSProperties } from "react";
import cn from 'classnames';

import styles from './button.module.scss';
export interface ButtonProps extends CSSProperties{
    disabled?: boolean;
    view: 'filled' | 'outlined';
    classNames: string;
}

const Button:React.FC<ButtonProps> = (
{
    disabled=false,
    view,
    classNames,
    children
}
) => {


    return (
        <button 
            disabled={disabled}
            className={cn(styles.button, {
                [styles.outlined]: view === "outlined",
                [styles.filled]: view === "filled",
            }, classNames)}
        >
            {children}
        </button>
    )
}

export default Button;