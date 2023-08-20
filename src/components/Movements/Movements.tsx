import {useState} from 'react';
import * as S from './Movements.style';
import MovementsProps from './Movements.types';

const Movements = ({data}: MovementsProps) => {
  const [showValue, setShowValue] = useState(false);
  return (
    <S.Container>
      <S.TextDate>{data.date}</S.TextDate>
      <S.Content>
        <S.TextLabel>{data.label}</S.TextLabel>
        {data.type === 0 ? (
          <S.TextExpenses>R$ -{data.value}</S.TextExpenses>
        ) : (
          <S.TextValue>R$ {data.value}</S.TextValue>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Movements;
