import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 18;
  padding-right: 18;
  margin-top: -24;
  margin-left: 14;
  margin-right: 14;
  border-radius: 4px;
  padding-top: 22;
  padding-bottom: 22;
  z-index: 99;
`;

export const Item = styled.View``;

export const ItemTitle = styled.Text`
  font-size: 20;
  color: #dadada;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CurrencySymbol = styled.Text`
  color: #dadada;
  margin-right: 6;
`;

export const Balance = styled.Text`
  font-size: 22;
  color: #2ecc61;
`;

export const Expenses = styled.Text`
  font-size: 22;
  color: #e74c3c;
`;
