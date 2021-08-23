import {createContext} from "react";

interface MobileNavigationContextModel {
    activeStack: string | undefined
    stackMap: {[key: string]: {history: string[]}};

    setActiveStack: (stackName: string) => void;
    push: (stackName: string, name: string) => void;
    back: (stackName: string) => void;
    addStack: (name: string) => void;
}

export const MobileNavigationContext = createContext<MobileNavigationContextModel>({
    activeStack: undefined,
    stackMap: {},

    setActiveStack: (stackName: string) => {},
    push: (stackName: string, name: string) => {},
    back: (stackName: string) => {},
    addStack: (name: string) => {},
})