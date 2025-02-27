import { useEffect, useState } from 'react';
import { ServicesType } from '../types/select-types';
import { services } from '../constants/service-types';

export const useSelectType = (location) => {
  const [selected, setSelected] = useState<ServicesType>(services[0]);

  useEffect(() => {
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = parseInt(urlParams.get('id')) || 0;

    const selectedType = services.find((service) => service.id === id).id;
    setSelected(services[selectedType]);
  }, [location]);

  return [selected, setSelected] as const;
};
