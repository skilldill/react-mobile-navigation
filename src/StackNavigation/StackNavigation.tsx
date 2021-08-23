import React, {FC, useEffect, useState} from "react";
import { MobileNavigationService } from "../MobileNavigation";
import { AnimatedScreen } from "./AnimatedScreen";

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

    const stackScreensMap = createStackScreensMap(children);

    return (
        <div className={styles.stackNavigation} style={{display: activeStack === name ? 'block' : 'none'}}>
            <AnimatedScreen>
                {(children as any[])[0]}
            </AnimatedScreen>

            {!!stackMap && !!stackMap[name] && (stackMap[name].history.length > 0) && (
                stackMap[name].history.map((screenName, i) => 
                    <AnimatedScreen key={i}>
                        {stackScreensMap[screenName]}
                    </AnimatedScreen>
                )
             )}
        </div>
    )
}