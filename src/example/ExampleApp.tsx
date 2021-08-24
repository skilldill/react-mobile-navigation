import React from "react";
import { MobileNavigation } from "../MobileNavigation";

import { Navigation } from "./Navigation";

export const ExampleApp = () => {
    return (
        <MobileNavigation platform="android">
            <Navigation />
        </MobileNavigation>
    )
}