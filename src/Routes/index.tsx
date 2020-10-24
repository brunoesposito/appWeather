import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StartScreen from '../Screens/Start';
import HomeScreen from '../Screens/Home';

import {RootStackParamList} from './Ts';

const Routes: React.FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
