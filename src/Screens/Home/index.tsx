import React, {useContext, useEffect, useState, useCallback} from 'react';
import {RefreshControl} from 'react-native';

import {ThemeContext} from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';

import {Container, Scroll} from './Styles';
import {TypeWeather} from './Ts';

import Temperature from './Components/Temperature';
import ListHour from './Components/ListHour';
import Logout from './Components/Logout';

const Home: React.FC = () => {
  const [weather, setWeather] = useState<TypeWeather | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const themeContext = useContext(ThemeContext);

  const getWeather = async () => {
    const resp = await AsyncStorage.getItem('@appWeather:weather');

    if (resp) {
      setWeather(JSON.parse(resp));
    }
  };

  const wait = (timeout: Number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    let coords: any = await AsyncStorage.getItem('@appWeather:coords');
    coords = JSON.parse(coords);

    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=8b67249a08e8dcc5f6d7e90885080032&cnt=7&lang=pt_br&units=metric`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then(async (newWeather) => {
        await AsyncStorage.setItem(
          '@appWeather:weather',
          JSON.stringify(newWeather),
        );

        setWeather(newWeather);
      });

    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getWeather();
  }, []);

  return (
    weather && (
      <Container>
        <Scroll
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={themeContext.styled.colors.white}
            />
          }
          showsVerticalScrollIndicator={false}
        >
          <Temperature weather={weather} />
          <ListHour weather={weather} />
          <Logout />
        </Scroll>
      </Container>
    )
  );
};

export default Home;
