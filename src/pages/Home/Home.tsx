import React from 'react';
import * as S from './Home.styles';
import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '256,35',
    date: '17/09/2023',
    type: 0,
  },
  {
    id: 2,
    label: 'Pix client x',
    value: '2.500,00',
    date: '14/09/2023',
    type: 1,
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '5/09/2023',
    type: 1,
  },
];

function Home(): JSX.Element {
  return (
    <S.Container>
      <Header name="Adriano Pessoa" />
      <Balance saldo="9.250,90" gastos="-527,00" />
      <S.TitleLastMoviments>Últimas movimentações</S.TitleLastMoviments>
    </S.Container>
  );
}

export default Home;
