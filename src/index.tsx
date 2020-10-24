import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './Routes';
import theme from './Themes';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaProvider>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
