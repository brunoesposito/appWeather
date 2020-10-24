import styled from 'styled-components/native';

export const BoxTemp = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BoxTempCity = styled.View`
  align-items: center;
`;

export const City = styled.Text`
  color: ${(props) => props.theme.styled.colors.white};
  font-weight: bold;
  font-size: 22px;
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.styled.colors.white};
  font-size: 15px;
`;

export const Temp = styled.Text`
  color: ${(props) => props.theme.styled.colors.white};
  font-size: 75px;
  margin: 10px 0;
`;

export const BoxMinMax = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BoxMinMaxText = styled.Text`
  color: ${(props) => props.theme.styled.colors.white};
  margin: 0 5px;
`;
