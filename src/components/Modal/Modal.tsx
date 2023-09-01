import React, {useState} from 'react';
import * as S from './Modal.styles';
import ModalProps from './Modal.types';
import HomePros from '../../pages/Home/Home.types';

const Modal = ({
  openModal,
  desableModal,
  handleInsertMovements,
}: ModalProps) => {
  const [desciption, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    const data = {
      id: 5,
      label: desciption,
      value: value,
      date: date,
      type: 1,
    };
    handleInsertMovements(data);
    desableModal();
    clearInputs();
  };

  const clearInputs = () => {
    setDescription('');
    setDate('');
    setValue('');
  };

  const handleDate = date => {
    const formattedString = date.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    setDate(formattedString);
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
            keyboardType="numeric"
            maxLength={10}
            value={date}
            onChangeText={date => handleDate(date)}
          />
          <S.Input
            placeholder="Valor"
            placeholderTextColor="#747474"
            keyboardType="numeric"
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
