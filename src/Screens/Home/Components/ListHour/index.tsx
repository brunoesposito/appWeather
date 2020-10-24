import React from 'react';

import {getHourDate} from './Functions';
import {toFixedNumber} from '../../Functions';
import {TypeWeatherComponent, TypeWeatherItem} from '../../Ts';

import {ListDays, Box, Row, Text, BoxMaxMin, Hr} from './Styles';

const ListHour: React.FC<TypeWeatherComponent> = ({weather}) => {
  return (
    <ListDays>
      {weather.list.map((item: TypeWeatherItem, index: number) => (
        <Box key={index}>
          <Row>
            <Text>{getHourDate(item.dt_txt)}</Text>
            <Text>{item.weather[0].description}</Text>
            <BoxMaxMin>
              <Text>{toFixedNumber(item.main.temp_max)}° / </Text>
              <Text>{toFixedNumber(item.main.temp_min)}°</Text>
            </BoxMaxMin>
          </Row>
          {index < 6 && <Hr />}
        </Box>
      ))}
    </ListDays>
  );
};

export default ListHour;
