import HomePros from '../../pages/Home/Home.types';
interface ModalProps {
  openModal: boolean;
  date: String;
  data: {
    id: number;
    label: String;
    value: String;
    date: String;
    type: number;
  };
  desableModal: () => void;
  handleInsertMovements: () => HomePros;
}

export default ModalProps;
