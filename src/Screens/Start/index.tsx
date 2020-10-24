import React, {useContext, useEffect, useCallback} from 'react';
import {ThemeContext} from 'styled-components';

import AsyncStorage from '@react-native-community/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';

import RenderItem from './Components/RenderItem';
import RenderButton from './Components/RenderButton';

import {Props} from './Ts';

const Start: React.FC<Props> = ({navigation}) => {
  const themeContext = useContext(ThemeContext);

  const slides = [
    {
      key: 'first',
      title: 'BEM VINDO!',
      text: 'Querendo saber sobre a previsão do tempo da sua cidade?',
      image: require('./image/welcome.png'),
      backgroundColor: themeContext.styled.colors.primary,
    },
    {
      key: 'second',
      title: 'SUA LOCALIZAÇÃO!',
      text: 'Clique em finalizar e aceite compartilhar sua localização!',
      image: require('./image/location.png'),
      backgroundColor: themeContext.styled.colors.primary,
    },
  ];

  const getWeather = useCallback(async () => {
    const weather = await AsyncStorage.getItem('@appWeather:weather');

    if (weather) {
      navigation.navigate('Home');
    }
  }, [navigation]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return (
    <AppIntroSlider
      renderItem={RenderItem}
      renderNextButton={() => <RenderButton text="Próximo" />}
      renderDoneButton={() => <RenderButton text="Finalizar" click />}
      data={slides}
    />
  );
};

export default Start;
