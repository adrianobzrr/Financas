import React, {useState} from 'react';
import * as S from './Modal.styles';
import ModalProps from './Modal.types';

const Modal = ({openModal, desableModal}: ModalProps) => {
  const [desciption, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    console.log(desciption);
    console.log(date);
    console.log(value);
    desableModal();
    clearInputs();
  };

  const clearInputs = () => {
    setDescription('');
    setDate('');
    setValue('');
  };

  return (
    <S.Modal visible={openModal}>
      <S.Container>
        <S.Header>
          <S.ActionButton
            onPress={() => {
              desableModal();
              clearInputs();
            }}>
            <S.Icon name="keyboard-backspace" size={26} />
          </S.ActionButton>
          <S.Title>Nova Movimentação</S.Title>
        </S.Header>
        <S.Content>
          <S.Input
            placeholder="Descrição"
            placeholderTextColor="#747474"
            multiline={true}
            value={desciption}
            onChangeText={desciption => setDescription(desciption)}
          />
          <S.Input
            placeholder="Data"
            placeholderTextColor="#747474"
            value={date}
            onChangeText={date => setDate(date)}
          />
          <S.Input
            placeholder="Valor"
            placeholderTextColor="#747474"
            value={value}
            onChangeText={value => setValue(value)}
          />
        </S.Content>
        <S.SubmitButton activeOpacity={0.8} onPress={handleSubmit}>
          <S.TextButton>Enviar</S.TextButton>
        </S.SubmitButton>
      </S.Container>
    </S.Modal>
  );
};

export default Modal;
