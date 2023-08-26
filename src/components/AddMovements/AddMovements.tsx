import React from 'react';
import * as S from './AddMovements.styles';
import AddMovementsProps from './AddMovements.types';

const AddMovemesnts = ({enableOpenModal}: AddMovementsProps) => {
  return (
    <S.Container>
      <S.ActionButton activeOpacity={0.8} onPress={enableOpenModal}>
        <S.AreaButton>
          <S.Icon name="plus" size={26} />
        </S.AreaButton>
      </S.ActionButton>
    </S.Container>
  );
};

export default AddMovemesnts;
