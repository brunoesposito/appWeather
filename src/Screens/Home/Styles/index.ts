import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.styled.colors.primary};
`;

export const Scroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
}))``;
