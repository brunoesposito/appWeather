import styled from 'styled-components/native';

export const ListDays = styled.View`
  flex: 2;
  justify-content: center;
  padding: 0 15px;
`;

export const Box = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.styled.colors.white};
`;

export const BoxMaxMin = styled.View`
  flex-direction: row;
`;

export const Hr = styled.View`
  height: 1px;
  background-color: ${(props) => props.theme.styled.colors.white};
  margin-bottom: 20px;
`;
