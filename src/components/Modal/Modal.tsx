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

  const formateValueToNumber = (value: String) => {
    return parseFloat(value.replace(',', '.'));
  };

  const handleSubmit = () => {
    const data: HomePros = {
      id: Date.now().toString(),
      label: desciption,
      value: formateValueToNumber(value),
      date: date,
      type: 0,
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

  const handleDate = (date: string) => {
    const formattedDate = date.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    setDate(formattedDate);
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
