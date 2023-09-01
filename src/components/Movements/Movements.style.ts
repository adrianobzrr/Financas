import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons//FontAwesome5';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 24px;
  border-bottom-width: 0.5px;
  border-bottom-color: #dadada;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
  margin-bottom: 8px;
`;

export const TextDate = styled.Text`
  color: #dadada;
  font-weight: bold;
`;

export const TextLabel = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

export const TextValue = styled.Text`
  font-size: 16px;
  color: #2ecc71;
  font-weight: bold;
`;

export const TextExpenses = styled.Text`
  font-size: 16px;
  color: #e74c3c;
  font-weight: bold;
`;

export const Icon = styled(FontAwesome5)`
  color: #e74c3c;
`;

export const touchableDelete = styled.TouchableOpacity``;
