import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Scroll = styled.ScrollView`
  max-height: 84;
  margin-bottom: 14;
  margin-top: 18;
  padding-left: 14;
  padding-right: 14;
`;

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
  margin-right: 32;
`;

export const Icon = styled(AntDesign)`
  color: #000;
`;

export const AreaButton = styled.View`
  background-color: #ecf0f1;
  height: 60;
  width: 60;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  margin-top: 4;
  text-align: center;
  font-weight: bold;
  color: #000;
`;
