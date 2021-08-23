import React from 'react';

import { MobileNavigation, useMobileNavigation } from './MobileNavigation';
import { Stack, StackScreen } from './StackNavigation';

const FirstScreen = () => {
  const {history} = useMobileNavigation("baseStack");

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
  const {history} = useMobileNavigation("baseStack");

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
  const {history} = useMobileNavigation("baseStack");

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
    <MobileNavigation>
      <Stack name="baseStack">

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
    </MobileNavigation>
  );
}

export default App;
