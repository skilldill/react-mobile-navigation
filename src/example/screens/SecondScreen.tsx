import React, { FC } from "react";
import {useStackNavigation} from "../../MobileNavigation";
import cn from "classnames";

import {ScreenProps} from "./Screen.model";
import styles from "./screens.module.css";

export const SecondScreen: FC<ScreenProps> = ({stackName}) => {
    const history = useStackNavigation(stackName);

    const handleClick = () => {
        history.push('profile');
    }

    return (
        <div className={cn([styles.screen, styles.secondScreen])}>
            <button className={styles.screenButton} onClick={handleClick}>
                Thrid screen
            </button>
        </div>
    )
}