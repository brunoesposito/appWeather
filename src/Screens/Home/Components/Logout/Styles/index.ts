import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  align-items: center;
  margin-bottom: ${Platform.OS === 'android' ? '15px' : 0};
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.styled.colors.white};
`;
