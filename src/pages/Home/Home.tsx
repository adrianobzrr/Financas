import React, {useEffect, useState} from 'react';
import * as S from './Home.styles';
import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';
import AddMovemesnts from '../../components/AddMovements/AddMovements';
import DataResolver from '../../Utils/Storage';
import Modal from '../../components/Modal/Modal';
import HomePros from './Home.types';

const Home = () => {
  const [movementsList, setMovementsList] = useState<HomePros[]>();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const storedList = await DataResolver.getData('@listaDados');
      console.log(storedList);
      setMovementsList(storedList);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (movementsList) {
      DataResolver.storeData('@listaDados', movementsList);
    }
  }, [movementsList]);

  const handleInsertMovements = (data: HomePros) => {
    if (movementsList) {
      setMovementsList([...movementsList, data]);
    }
  };

  const handleDelet = (data: HomePros) => {
    const find = movementsList?.filter(r => r.id !== data.id);
    setMovementsList(find);
  };

  const enableOpenModal = () => {
    setOpenModal(true);
  };

  const desableModal = () => {
    setOpenModal(false);
  };

  const formateValueToString = (value: number) => {
    return value.toLocaleString('pt-BR', {minimumFractionDigits: 2});
  };

  const handleBalance = () => {
    let sumBalance = 0;
    if (movementsList) {
      for (const item of movementsList) {
        if (item.type === 1) {
          sumBalance += item.value;
        } else {
          sumBalance -= item.value;
        }
      }
    }
    return formateValueToString(sumBalance);
  };

  const handleExpenses = () => {
    let sumExpenses = 0;
    if (movementsList) {
      for (const item of movementsList) {
        if (item.type === 0) {
          sumExpenses += item.value;
        }
      }
    }
    return formateValueToString(sumExpenses);
  };

  return (
    <S.Container>
      <Header name="Adriano Pessoa" />
      <Balance saldo={handleBalance()} gastos={handleExpenses()} />
      {/* <Actions /> */}
      <Modal
        openModal={openModal}
        desableModal={desableModal}
        handleInsertMovements={handleInsertMovements}
      />
      <S.TitleLastMoviments>Últimas movimentações</S.TitleLastMoviments>
      <S.ListMoviments
        data={movementsList}
        keyExtractor={item => String(item.id)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <S.Movements>
            <S.Content>
              <S.TextDate>{item.date}</S.TextDate>
              <S.touchableDelete
                activeOpacity={0.8}
                onPress={() => handleDelet(item)}>
                <S.Icon name="trash-alt" size={20} />
              </S.touchableDelete>
            </S.Content>
            <S.Content>
              <S.TextLabel>{item.label}</S.TextLabel>
              {item.type === 0 ? (
                <S.TextExpenses>
                  R$ -{formateValueToString(item.value)}
                </S.TextExpenses>
              ) : (
                <S.TextAppetizer>
                  R$ {formateValueToString(item.value)}
                </S.TextAppetizer>
              )}
            </S.Content>
          </S.Movements>
        )}
      />
      <AddMovemesnts enableOpenModal={enableOpenModal} />
    </S.Container>
  );
};

export default Home;
