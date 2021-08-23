import React, { FC, ReactNode } from "react";

interface StackScreenProps {
    name: string;
}

export const StackScreen: FC<StackScreenProps> = ({children}) => <>{children}</>;