import React, { FC, useState } from "react";

import {MobileNavigationContext} from "./MobileNavigation.context";

export const MobileNavigation: FC = ({children}) => {
    const [stackMap, setStackMap] = useState<{[key: string]: {history: string[]}}>({});
    const [activeStack, setActiveStack] = useState<string>();

    const addStack = () => {
        let inProcess = false;

        const add = (name: string) => {
            if (!inProcess) {
                inProcess = true;
                setStackMap((stackMap) => ({ ...stackMap, [name]: {history: []} }));
                !activeStack && setActiveStack(name);
                inProcess = false;
                
                return;
            } else {
                add(name);
            }
        }

        return add;
    }

    const back = (stackName: string) => {
        const prepareStacksMap = {...stackMap};
        prepareStacksMap[stackName].history.pop();
        setStackMap(prepareStacksMap);
    }

    const push = (stackName: string, screenName: string) => {
        const prepareStacksMap = {...stackMap};
        prepareStacksMap[stackName].history.push(screenName);
        setStackMap(prepareStacksMap);
    }

    const values = {
        activeStack,
        stackMap,

        setActiveStack,
        back,
        push,
        addStack: addStack(),
    }

    return (
        <MobileNavigationContext.Provider value={values}>
            {children}
        </MobileNavigationContext.Provider>
    )
}