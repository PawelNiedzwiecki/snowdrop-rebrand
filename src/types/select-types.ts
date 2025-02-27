export type ServicesType = {
  id: number;
  name: string;
  default?: boolean;
};

export type SelectType = {
  selected: ServicesType;
  setSelected: (selected: ServicesType) => void;
};
