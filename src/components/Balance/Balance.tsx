import React from 'react';
import * as S from './Balance.styles';
import BalanceProps from './Balance.types';

const Balance = ({saldo, gastos}: BalanceProps) => {
  return (
    <S.Container>
      <S.Item>
        <S.ItemTitle>Saldo</S.ItemTitle>
        <S.Content>
          <S.CurrencySymbol>R$</S.CurrencySymbol>
          <S.Balance>{saldo}</S.Balance>
        </S.Content>
      </S.Item>
      <S.Item>
        <S.ItemTitle>Gastos</S.ItemTitle>
        <S.Content>
          <S.CurrencySymbol>R$</S.CurrencySymbol>
          <S.Expenses>{gastos}</S.Expenses>
        </S.Content>
      </S.Item>
    </S.Container>
  );
};

export default Balance;
