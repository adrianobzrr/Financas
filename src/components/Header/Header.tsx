import React from 'react';
import * as S from './Header.styles';
import HeaderProps from './Header.types';

const Header = ({name}: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.textUsername>{name}</S.textUsername>
        <S.touchableUser activeOpacity={0.8}>
          <S.Icon name="user" size={27} color={'#fff'} />
        </S.touchableUser>
      </S.Content>
    </S.Container>
  );
};

export default Header;
