import React from "react";
import cn from 'classnames';

import Button from "../button/button";

import styles from './heroSection.module.scss';

export interface HeroSectionProps {
    classNames?: string;
}

const HeroSection:React.FC<HeroSectionProps> = ({classNames=''}) => {
    return (
        <div className={cn(styles.wrapper, classNames)}>
            <h1 className={styles.caption}>Men’s Barbershop in The Middle East</h1>
            <div className={styles.additional__information}>
                <h3 className={styles.additional__caption}>THE HIGHEST RATED</h3>
                <h4 className={styles.additional__under_caption}>Text that is placed at the bottom of the heading to reveal details</h4>
            </div>
            <Button 
                view="filled"
                classNames={styles.button}
            >Book now</Button>
        </div>
    )
}

export default HeroSection;