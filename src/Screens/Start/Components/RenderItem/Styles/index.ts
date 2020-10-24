import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {TypeContainer} from '../Ts';

export const Container = styled(SafeAreaView)<TypeContainer>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.styled.colors.success};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.styled.colors.white};
  font-size: 22px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.styled.colors.white};
  font-size: 16px;
  text-align: center;
  line-height: 25px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  margin: 40px 0;
`;
