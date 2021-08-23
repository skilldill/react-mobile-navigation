import {createContext} from "react";

interface MobileNavigationContextModel {
    activeStack: string | undefined
    stackMap: {[key: string]: {history: {name: string, state: 'show' | 'closing'}[]}};
    platform: 'android' | 'ios';

    setActiveStack: (stackName: string) => void;
    push: (stackName: string, name: string) => void;
    back: (stackName: string) => void;
    addStack: (name: string) => void;
}

export const MobileNavigationContext = createContext<MobileNavigationContextModel>({
    activeStack: undefined,
    stackMap: {},
    platform: 'ios',

    setActiveStack: (stackName: string) => {},
    push: (stackName: string, name: string) => {},
    back: (stackName: string) => {},
    addStack: (name: string) => {},
})