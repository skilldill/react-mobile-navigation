import React, { FC } from "react";

import styles from "./StackNavigation.module.css";

interface ScreenAndroidProps {
    index: number;
}

export const ScreenAndroid: FC<ScreenAndroidProps> = (props) => {
    const {children, index} = props;
    
    return (
        <div className={styles.screenAndroid} style={{zIndex: 1000 + index}}>
            {children}
        </div>
    )
}