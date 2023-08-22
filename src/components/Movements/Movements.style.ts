import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 24;
  border-bottom-width: 0.5;
  border-bottom-color: #dadada;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2;
  margin-bottom: 8;
`;

export const TextDate = styled.Text`
  color: #dadada;
  font-weight: bold;
`;

export const TextLabel = styled.Text`
  font-weight: bold;
  font-size: 16;
  color: #000;
`;

export const TextValue = styled.Text`
  font-size: 16;
  color: #2ecc71;
  font-weight: bold;
`;

export const TextExpenses = styled.Text`
  font-size: 16;
  color: #e74c3c;
  font-weight: bold;
`;
