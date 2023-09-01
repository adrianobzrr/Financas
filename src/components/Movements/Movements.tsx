import React from 'react';
import * as S from './Movements.style';
import MovementsProps from './Movements.types';

const Movements: React.FC<MovementsProps> = ({data, handleDelet}) => {
  return (
    <S.Container>
      <S.Content>
        <S.TextDate>{data.date}</S.TextDate>
        <S.touchableDelete
          activeOpacity={0.8}
          onPress={() => handleDelet(data)}>
          <S.Icon name="trash-alt" size={20} />
        </S.touchableDelete>
      </S.Content>
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
