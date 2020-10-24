import React from 'react';

import {Container, Title, SubTitle, Image} from './Styles';
import {TypeSlides} from './Ts';

const RenderItem: React.FC<TypeSlides> = ({item}) => {
  return (
    <Container backgroundColor={item.backgroundColor}>
      <Title>{item.title}</Title>
      <Image source={item.image} resizeMode="contain" />
      <SubTitle>{item.text}</SubTitle>
    </Container>
  );
};

export default RenderItem;
