import React from 'react';
import * as S from './Actions.styles';

const Actions = () => {
  return (
    <S.Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
      <S.ActionButton>
        <S.AreaButton>
          <S.Icon name="addfolder" size={26} />
        </S.AreaButton>
        <S.ButtonLabel>Entradas</S.ButtonLabel>
      </S.ActionButton>
      <S.ActionButton>
        <S.AreaButton>
          <S.Icon name="tagso" size={26} />
        </S.AreaButton>
        <S.ButtonLabel>Compras</S.ButtonLabel>
      </S.ActionButton>
      <S.ActionButton>
        <S.AreaButton>
          <S.Icon name="creditcard" size={26} />
        </S.AreaButton>
        <S.ButtonLabel>Carteira</S.ButtonLabel>
      </S.ActionButton>
      <S.ActionButton>
        <S.AreaButton>
          <S.Icon name="barcode" size={26} />
        </S.AreaButton>
        <S.ButtonLabel>Coletos</S.ButtonLabel>
      </S.ActionButton>
      <S.ActionButton>
        <S.AreaButton>
          <S.Icon name="setting" size={26} />
        </S.AreaButton>
        <S.ButtonLabel>Conta</S.ButtonLabel>
      </S.ActionButton>
    </S.Scroll>
  );
};

export default Actions;
