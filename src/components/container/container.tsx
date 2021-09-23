import React from "react";
import cn from "classnames";

import styles from './container.module.scss';

export interface ContainerPorps {
    classNames?: string;
}

const Container:React.FC<ContainerPorps> = ({children, classNames=''}) => {
    return (
        <div className={cn(styles.container, classNames)}>
            {children}
        </div>
    )
}

export default Container;

