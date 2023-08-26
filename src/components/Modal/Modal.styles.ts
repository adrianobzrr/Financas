import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  background-color: red;
`;

export const Header = styled.View`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: blue;
  flex-direction: row;
  align-items: center;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 60px;
  border-radius: 30px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: #fff;
`;
