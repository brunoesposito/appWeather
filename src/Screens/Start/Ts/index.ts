import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../Routes/Ts';

type StartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Start'
>;

export type Props = {
  navigation: StartScreenNavigationProp;
};
