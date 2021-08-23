import {useContext} from "react";
import { MobileNavigationContext } from "./MobileNavigation.context";

export const useMobileNavigation = (stackName: string) => {
    const navigation = useContext(MobileNavigationContext);

    const history = {
        push: (name: string) => navigation.push(stackName, name),
        back: () => navigation.back(stackName),
    }

    return history;
}

/**
 * For inner use
 */
export const MobileNavigationService = (stackName: string) => {
    const navigation = useContext(MobileNavigationContext);

    const history = {
        push: (name: string) => navigation.push(stackName, name),
        back: () => navigation.back(stackName),
    }

    return {
        ...history,

        stackMap: navigation.stackMap,
        activeStack: navigation.activeStack,
        addStack: navigation.addStack,
        setActiveStack: navigation.setActiveStack,
    };
}