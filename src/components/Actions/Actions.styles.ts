import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Scroll = styled.ScrollView`
  max-height: 84px;
  margin-bottom: 14px;
  margin-top: 18px;
  padding-left: 14px;
  padding-right: 14px;
`;

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
  margin-right: 32px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: #000;
`;

export const AreaButton = styled.View`
  background-color: #ecf0f1;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  margin-top: 4px;
  text-align: center;
  font-weight: bold;
  color: #000;
`;
