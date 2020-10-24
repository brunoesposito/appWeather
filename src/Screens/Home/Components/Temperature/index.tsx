import React from 'react';

import {
  BoxTemp,
  BoxTempCity,
  City,
  Description,
  Temp,
  BoxMinMax,
  BoxMinMaxText,
} from './Styles';

import {toFixedNumber} from '../../Functions';
import {TypeWeatherComponent} from '../../Ts';

const Temperature: React.FC<TypeWeatherComponent> = ({weather}) => {
  return (
    <BoxTemp>
      <BoxTempCity>
        <City>{weather.city.name}</City>
        <Description>{weather.list[0].weather[0].description}</Description>
      </BoxTempCity>
      <Temp>{toFixedNumber(weather.list[0].main.temp)}</Temp>
      <BoxMinMax>
        <BoxMinMaxText>
          Máx.: {toFixedNumber(weather.list[0].main.temp_max)}°
        </BoxMinMaxText>
        <BoxMinMaxText>
          Min.: {toFixedNumber(weather.list[0].main.temp_min)}°
        </BoxMinMaxText>
      </BoxMinMax>
    </BoxTemp>
  );
};

export default Temperature;
