import React from 'react';
import * as S from './Modal.styles';
import ModalProps from './Modal.types';

const Modal = ({openModal, desableModal}: ModalProps) => {
  return (
    <S.Modal visible={openModal}>
      <S.Container>
        <S.Header>
          <S.ActionButton onPress={desableModal}>
            <S.Icon name="keyboard-backspace" size={26} />
          </S.ActionButton>
        </S.Header>
      </S.Container>
    </S.Modal>
  );
};

export default Modal;
