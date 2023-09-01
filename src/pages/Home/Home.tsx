import React, {useCallback, useEffect, useState} from 'react';
import * as S from './Home.styles';
import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';
import Movements from '../../components/Movements/Movements';
import AddMovemesnts from '../../components/AddMovements/AddMovements';
import DataResolver from '../../Utils/Storage';
import Modal from '../../components/Modal/Modal';

const Home = () => {
  const [movementsList, setMovementsList] = useState([{}]);
  const [openModal, setOpenModal] = useState(false);

  const enableOpenModal = () => {
    setOpenModal(true);
  };

  const desableModal = () => {
    setOpenModal(false);
  };

  const handleInsertMovements = useCallback((data) => {
    if (data) {
      setMovementsList([...movementsList, data]);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const storedList = await DataResolver.getData('@listaDados');
      console.log(storedList);
      setMovementsList(storedList);
    };

    fetchData();
  }, []);

  useEffect(() => {
    DataResolver.storeData('@listaDados', movementsList);
  }, [movementsList]);

  const handleDelet = useCallback((data) => {
    const find = movementsList.filter(r => r.label !== data.label);
    setMovementsList(find);
  });

  return (
    <S.Container>
      <Header name="Adriano Pessoa" />
      <Balance saldo="9.250,90" gastos="-527,00" />
      {/* <Actions /> */}
      <Modal
        openModal={openModal}
        desableModal={desableModal}
        handleInsertMovements={handleInsertMovements}
      />
      <S.TitleLastMoviments>Últimas movimentações</S.TitleLastMoviments>
      <S.ListMoviments
        data={movementsList}
        keyExtractor={item => String(item.label)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Movements data={item} handleDelet={handleDelet} />
        )}
      />
      <AddMovemesnts enableOpenModal={enableOpenModal} />
    </S.Container>
  );
};

export default Home;
