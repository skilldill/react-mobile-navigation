import React, { FC } from "react";

import styles from "./StackNavigation.module.css";

interface AnimatedScreenProps {

}

export const AnimatedScreen: FC<AnimatedScreenProps> = (props) => {
    const {children} = props;
    
    return (
        <div className={styles.animatedScreen}>
            {children}
        </div>
    )
}