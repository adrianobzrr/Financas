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
  const [buttonAppetizer, setButtonAppetizer] = useState(false);
  const [buttonExpenses, setButtonExpenses] = useState(false);

  const selectButtonAppertizer = () => {
    setButtonAppetizer(true);
    setButtonExpenses(false);
  };

  const selectButtonExpenses = () => {
    setButtonExpenses(true);
    setButtonAppetizer(false);
  };

  const formateValueToNumber = (value: String) => {
    return parseFloat(value.replace(',', '.'));
  };

  const handleSubmit = () => {
    const data: HomePros = {
      id: Date.now().toString(),
      label: desciption,
      value: formateValueToNumber(value),
      date: date,
      type: buttonExpenses ? 0 : 1,
    };
    handleInsertMovements(data);
    desableModal();
    clearInputs();
  };

  const clearInputs = () => {
    setDescription('');
    setDate('');
    setValue('');
    setButtonAppetizer(false);
    setButtonExpenses(false);
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
            <S.Icon name="arrow-left" size={26} color={'#fff'} />
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
          <S.TouchableTextContainer>
            <S.TexTypeMovements>Entrada</S.TexTypeMovements>
            <S.SelectMovements
              activeOpacity={0.8}
              onPress={selectButtonAppertizer}>
              <S.Icon
                name="check"
                size={22}
                color={buttonAppetizer ? '#2ecc71' : '#eeee'}
              />
            </S.SelectMovements>
          </S.TouchableTextContainer>
          <S.TouchableTextContainer>
            <S.TexTypeMovements>Saida</S.TexTypeMovements>
            <S.SelectMovements
              activeOpacity={0.8}
              onPress={selectButtonExpenses}>
              <S.Icon
                name="check"
                size={22}
                color={buttonExpenses ? '#2ecc71' : '#eeee'}
              />
            </S.SelectMovements>
          </S.TouchableTextContainer>
        </S.Content>
        <S.SubmitButton activeOpacity={0.8} onPress={handleSubmit}>
          <S.TextButton>Enviar</S.TextButton>
        </S.SubmitButton>
      </S.Container>
    </S.Modal>
  );
};

export default Modal;
