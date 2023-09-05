import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Modal = styled.Modal``;

export const Container = styled.View`
  background-color: #fafafa;
  flex: 1;
`;

export const Header = styled.View`
  background-color: #8000ff;
  padding-top: 50px;
  flex-direction: row;
  padding-left: 6px;
  padding-right: 16px;
  padding-bottom: 50px;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-left: 5%;
  margin-right: 15%;
`;

export const Icon = styled(Feather)`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  font-size: 12px;
`;

export const Content = styled.View`
  background-color: #fff;
  padding-left: 18px;
  padding-right: 18px;
  margin-top: 18px;
  margin-left: 22px;
  margin-right: 22px;
  border-radius: 4px;
  padding-top: 22px;
  padding-bottom: 22px;
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
  font-size: 14px;
  color: #fff;
`;

export const TouchableTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const TexTypeMovements = styled.Text`
  font-size: 14px;
  color: #747474;
`;

export const SelectMovements = styled.TouchableOpacity`
  background-color: #cecccc;
`;
