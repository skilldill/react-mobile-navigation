import React, { FC, useEffect } from "react";
import cn from "classnames";

import styles from "./StackNavigation.module.css";

interface ScreenIOSProps {
    index: number;
    closing?: boolean;
    translated?: boolean;
}

export const ScreenIOS: FC<ScreenIOSProps> = (props) => {
    const {children, index, closing, translated} = props;

    return (
        <div 
            className={cn({
                [styles.screenIOS]: true,
                [styles.screenIOSclose]: closing,
                [styles.screenIOStranslated]: translated,
            })} 
            style={{zIndex: 1000 + index}}
        >
            {children}
        </div>
    )
}