import React, {useState} from 'react';
import {PermissionsAndroid, Platform, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';

import {ButtonNext, ButtonDone, ButtonText} from './Styles';
import {TypeRenderButton} from './Ts';

const RenderButton: React.FC<TypeRenderButton> = ({text, click}) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  if (click) {
    const requestLocationPermission = async () => {
      setLoading(true);

      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Precisamos da sua localização',
            message:
              'Para usar os recursos do aplicativo ' +
              'você precisa compartilhar sua localização.',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.DENIED) {
          setLoading(false);
          return Alert.alert('Algo de errado aconteceu, tenta novamente!');
        }
      }

      Geolocation.setRNConfiguration({
        authorizationLevel: 'whenInUse',
        skipPermissionRequests: false,
      });
      Geolocation.getCurrentPosition(
        async (info) => {
          fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${info.coords.latitude}&lon=${info.coords.longitude}&appid=8b67249a08e8dcc5f6d7e90885080032&cnt=7&lang=pt_br&units=metric`,
            {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            },
          )
            .then((response) => response.json())
            .then(async (weather) => {
              await AsyncStorage.setItem(
                '@appWeather:coords',
                JSON.stringify(info.coords),
              );
              await AsyncStorage.setItem(
                '@appWeather:weather',
                JSON.stringify(weather),
              );

              setLoading(false);
              return navigation.navigate('Home');
            });
        },
        (err) => {
          console.log(err);
          setLoading(false);
          Alert.alert('Algo de errado aconteceu, tenta novamente!');
        },
        {
          enableHighAccuracy: false,
          timeout: 20000,
        },
      );
    };

    return (
      <ButtonDone onPress={() => requestLocationPermission()}>
        <ButtonText>{loading ? 'Aguarde...' : text}</ButtonText>
      </ButtonDone>
    );
  }

  return (
    <ButtonNext>
      <ButtonText>{text}</ButtonText>
    </ButtonNext>
  );
};

export default RenderButton;
