import React, { FC } from "react";
import {useStackNavigation} from "../../MobileNavigation";
import cn from "classnames";

import {ScreenProps} from "./Screen.model";
import styles from "./screens.module.css";

export const FirstScreen: FC<ScreenProps> = ({stackName}) => {
    const history = useStackNavigation(stackName);

    const handleClick = () => {
        history.push('settings');
    }

    return (
        <div className={cn([styles.screen, styles.firstScreen])}>
            <button className={styles.screenButton} onClick={handleClick}>
                Second screen
            </button>
        </div>
    )
}