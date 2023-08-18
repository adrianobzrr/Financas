import React from 'react';
import * as S from './Home.styles';
import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';

function Home(): JSX.Element {
  return (
    <S.Container>
      <Header name="Adriano Pessoa" />
      <Balance saldo="9.250,90" gastos="-527,00" />
    </S.Container>
  );
}

export default Home;
