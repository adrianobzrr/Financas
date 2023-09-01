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
  handleInsertMovements: () => void;
}

export default ModalProps;
