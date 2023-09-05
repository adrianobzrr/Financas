import React from 'react';
import * as S from './Balance.styles';
import BalanceProps from './Balance.types';

const Balance = ({saldo, gastos}: BalanceProps) => {
  const formateValueToString = (value: number) => {
    return value.toLocaleString('pt-BR', {minimumFractionDigits: 2});
  };
  return (
    <S.Container>
      <S.Item>
        <S.ItemTitle>Saldo</S.ItemTitle>
        <S.Content>
          <S.CurrencySymbol>R$</S.CurrencySymbol>
          {saldo > 0 ? (
            <S.Balance>{formateValueToString(saldo)}</S.Balance>
          ) : (
            <S.Expenses>{formateValueToString(saldo)}</S.Expenses>
          )}
        </S.Content>
      </S.Item>
      <S.Item>
        <S.ItemTitle>Gastos</S.ItemTitle>
        <S.Content>
          <S.CurrencySymbol>R$</S.CurrencySymbol>
          <S.Expenses>{formateValueToString(gastos)}</S.Expenses>
        </S.Content>
      </S.Item>
    </S.Container>
  );
};

export default Balance;
