interface MovementsProps {
  data: {
    id: number;
    label: String;
    value: String;
    date: String;
    type: number;
  };
  handleDelet: () => void;
}

export default MovementsProps;
