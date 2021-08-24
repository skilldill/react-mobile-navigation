import React from 'react';

import { MobileNavigation, useStackNavigation } from './MobileNavigation';
import { Stack, StackScreen } from './StackNavigation';
import {Tab, Tabs} from "./TabNavigation"

const FirstScreen = () => {
  const history = useStackNavigation("firstStack");

  return (
    <div>
      <h1>FIRST</h1>

      <button onClick={() => history.push('second')}>
        SECOND SCREEN
      </button>
    </div>
  )
}

const SecondScreen = () => {
  const history = useStackNavigation("firstStack");

  return (
    <div>
      <h1>SECOND</h1>

      <button onClick={history.back}>
        BACK
      </button>

      <button onClick={() => history.push('third')}>
        THIRD SCREEN
      </button>
    </div>
  )
}

const ThridScreen = () => {
  const history = useStackNavigation("firstStack");

  return (
    <div>
      <h1>THIRD</h1>

      <button onClick={history.back}>
        BACK
      </button>
    </div>
  )
}

function App() {
  return (
      <MobileNavigation platform="ios">
        <Tabs>
          <Tab title="First" titleActive="Firts">
            <Stack name="firstStack">

              <StackScreen name="first">
                <FirstScreen />
              </StackScreen>

              <StackScreen name="second">
                <SecondScreen />
              </StackScreen>

              <StackScreen name="third">
                <ThridScreen />
              </StackScreen>

            </Stack>
          </Tab>

          <Tab title="Second" titleActive="Second">
            <Stack name="secondStack">

              <StackScreen name="first">
                <FirstScreen />
              </StackScreen>

              <StackScreen name="second">
                <SecondScreen />
              </StackScreen>

              <StackScreen name="third">
                <ThridScreen />
              </StackScreen>

            </Stack>
          </Tab>
        </Tabs>

        
      </MobileNavigation>
  );
}

export default App;
