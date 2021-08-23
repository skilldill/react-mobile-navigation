import React, {FC, useEffect, useState} from "react";
import { MobileNavigationService } from "../MobileNavigation";

import { ScreenAndroid } from "./ScreenAndroid";
import { ScreenIOS } from "./ScreenIOS";

import styles from "./StackNavigation.module.css";
import { createStackScreensMap } from "./StackNavigation.utils";

interface StackProps {
    name: string;
}

export const Stack: FC<StackProps> = (props) => {
    const {children, name} = props;

    const {addStack, activeStack, stackMap} = MobileNavigationService(name);

    useEffect(() => {
        addStack(name);
    }, [])

    useEffect(() => console.log(stackMap), [stackMap])

    const stackScreensMap = createStackScreensMap(children);

    return (
        <div className={styles.stackNavigation} style={{display: activeStack === name ? 'block' : 'none'}}>
            <ScreenIOS index={0}>
                {(children as any[])[0]}
            </ScreenIOS>

            {!!stackMap && !!stackMap[name] && (stackMap[name].history.length > 0) && (
                stackMap[name].history.map((screen, i) => 
                    <ScreenIOS key={i} index={i} closing={screen.state === 'closing'}>
                        {stackScreensMap[screen.name]}
                    </ScreenIOS>
                )
            )}
        </div>
    )
}