import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Modal = styled.Modal``;

export const Container = styled.View`
  background-color: #fafafa;
  flex: 1;
`;

export const Header = styled.View`
  background-color: #8000ff;
  padding-top: 50;
  flex-direction: row;
  padding-left: 6;
  padding-right: 16;
  padding-bottom: 50;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-left: 5%;
  margin-right: 15%;
`;

export const Icon = styled(MaterialCommunityIcons)`
  align-items: center;
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 20;
  color: #fff;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  font-size: 12;
`;

export const Content = styled.View`
  background-color: #fff;
  padding-left: 18;
  padding-right: 18;
  margin-top: 18;
  margin-left: 22;
  margin-right: 22;
  border-radius: 4px;
  padding-top: 22;
  padding-bottom: 22;
  z-index: 99;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #8000ff;
  width: 70%;
  height: 32px;
  margin-left: 15%;
  margin-top: 14px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  font-size: 14;
  color: #fff;
`;
