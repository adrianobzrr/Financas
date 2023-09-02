import HomePros from '../../pages/Home/Home.types';
interface ModalProps {
  openModal: boolean;
  date: String;
  data: {
    id: String;
    label: String;
    value: String;
    date: String;
    type: number;
  };
  desableModal: () => void;
  handleInsertMovements: (data: HomePros) => void;
}

export default ModalProps;
