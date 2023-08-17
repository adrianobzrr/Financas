import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/Feather';

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export const Container = styled.View`
  background-color: #8000ff;
  padding-top: ${statusBarHeight};
  flex-direction: row;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 44;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(FontAwesome5)`
  color: #e2d7d7;
  /* margin-right: 10px; */
`;

export const textUsername = styled.Text`
  font-size: 18;
  color: #fff;
  font-weight: bold;
`;

export const touchableUser = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.5);
  width: 44;
  height: 44;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
`;
