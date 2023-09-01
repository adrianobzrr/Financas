import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 60px;
  border-radius: 30px;
  margin-right: 20px;
  margin-bottom: 20px;
  position: absolute;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: #fff;
`;

export const AreaButton = styled.View`
  background-color: #8000ff;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
