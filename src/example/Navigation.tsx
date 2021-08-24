import React from "react";

import {useMobileNavigation} from "../MobileNavigation";
import {Tabs, Tab} from "../TabNavigation";
import {Stack, StackScreen} from "../StackNavigation";

import { FirstScreen, SecondScreen, ThirdScreen } from "./screens";

export const Navigation = () => {
    const {changeStack} = useMobileNavigation();

    return (
        <Tabs onChange={changeStack}>
            <Tab name="firstStack" title="First" titleActive="FIRTS">
                <Stack name="firstStack">
                    <StackScreen name="home">
                        <FirstScreen stackName="firstStack" />
                    </StackScreen>

                    <StackScreen name="settings">
                        <SecondScreen stackName="firstStack" />
                    </StackScreen>

                    <StackScreen name="profile">
                        <ThirdScreen stackName="firstStack" />
                    </StackScreen>
                </Stack>
            </Tab>

            <Tab name="secondStack" title="Second" titleActive="SECOND">
                <Stack name="secondStack">
                    <StackScreen name="home">
                        <FirstScreen stackName="secondStack" />
                    </StackScreen>

                    <StackScreen name="settings">
                        <SecondScreen stackName="secondStack" />
                    </StackScreen>

                    <StackScreen name="help">
                        <ThirdScreen stackName="secondStack" />
                    </StackScreen>
                </Stack>
            </Tab>
        </Tabs>
    )
}