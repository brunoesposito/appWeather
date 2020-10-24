import styled from 'styled-components/native';

export const ButtonNext = styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const ButtonDone = styled.TouchableOpacity`
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.styled.colors.white};
  font-weight: bold;
`;
