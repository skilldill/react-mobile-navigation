import React, { FC } from "react";

interface StackScreenProps {
    name: string;
}

export const StackScreen: FC<StackScreenProps> = ({children}) => <>{children}</>;