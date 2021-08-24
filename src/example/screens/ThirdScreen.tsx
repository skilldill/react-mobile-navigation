import React, { FC } from "react";
import {useStackNavigation} from "../../MobileNavigation";
import cn from "classnames";

import {ScreenProps} from "./Screen.model";
import styles from "./screens.module.css";

export const ThirdScreen: FC<ScreenProps> = ({stackName}) => {
    const history = useStackNavigation(stackName);

    return (
        <div className={cn([styles.screen, styles.thirdScreen])}>
            <button className={styles.screenButton} onClick={history.back}>
                Back
            </button>
        </div>
    )
}