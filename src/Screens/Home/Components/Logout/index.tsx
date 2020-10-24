import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import {Button, ButtonText} from './Styles';

const Logout: React.FC = () => {
  const navigation = useNavigation();

  const logOut = () => {
    AsyncStorage.clear();
    navigation.navigate('Start');
  };

  return (
    <Button onPress={() => logOut()}>
      <ButtonText>Sair</ButtonText>
    </Button>
  );
};

export default Logout;
