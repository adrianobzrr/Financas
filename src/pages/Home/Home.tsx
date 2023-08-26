import React, {useEffect, useState} from 'react';
import * as S from './Home.styles';
import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';
import Movements from '../../components/Movements/Movements';
import AddMovemesnts from '../../components/AddMovements/AddMovements';
import DataResolver from '../../Utils/Storage';
import Modal from '../../components/Modal/Modal';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '256,35',
    date: '17/09/2023',
    type: 0,
  },
  {
    id: 2,
    label: 'Pix client x',
    value: '2.500,00',
    date: '14/09/2023',
    type: 1,
  },
  // {
  //   id: 3,
  //   label: 'Salário',
  //   value: '7.200,00',
  //   date: '5/09/2023',
  //   type: 1,
  // },
];

const Home = () => {
  const [movementsList, setMovementsList] = useState(list);
  const [openModal, setOpenModal] = useState(false);

  const enableOpenModal = () => {
    setOpenModal(true);
  };

  const desableModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    DataResolver.storeData('listaDados', movementsList);
  }, [movementsList]);

  useEffect(() => {
    const fetchData = async () => {
      const storedList = await DataResolver.getData('listaDados');
      console.log(storedList);
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <Header name="Adriano Pessoa" />
      <Balance saldo="9.250,90" gastos="-527,00" />
      {/* <Actions /> */}
      <Modal openModal={openModal} desableModal={desableModal} />
      <S.TitleLastMoviments>Últimas movimentações</S.TitleLastMoviments>
      <S.ListMoviments
        data={movementsList}
        keyExtractor={item => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item} />}
      />
      <AddMovemesnts enableOpenModal={enableOpenModal} />
    </S.Container>
  );
};

export default Home;
