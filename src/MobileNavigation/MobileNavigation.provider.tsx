import React, { FC, useState } from "react";

import {MobileNavigationContext} from "./MobileNavigation.context";

export const MobileNavigation: FC = ({children}) => {
    const [stackMap, setStackMap] = useState<{[key: string]: {history: {name: string, state: 'show' | 'closing' }[]}}>({});
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
        prepareStacksMap[stackName].history[prepareStacksMap[stackName].history.length - 1].state = "closing";
        setStackMap(prepareStacksMap);

        const timeout = setTimeout(() => {
            prepareStacksMap[stackName].history.pop();
            console.log(prepareStacksMap[stackName]);
            setStackMap(prepareStacksMap);
            clearTimeout(timeout);
        }, 400)
    }

    const push = (stackName: string, screenName: string) => {
        const prepareStacksMap = {...stackMap};
        prepareStacksMap[stackName].history.push({name: screenName, state: 'show'});
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