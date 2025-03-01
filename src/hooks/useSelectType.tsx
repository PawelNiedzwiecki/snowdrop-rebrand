import { useEffect, useState } from 'react';
import { ServicesType } from '../types/select-types';
import { services } from '../config/service-types';
import { WindowLocation } from 'reach__router';

export const useSelectServiceFromUrl = (location: WindowLocation) => {
  const [selected, setSelected] = useState<ServicesType['name']>(
    services[0].name
  );

  useEffect(() => {
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = parseInt(urlParams.get('id') as string) ?? 0;

    const foundService = services.find((service) => service.id === id)?.name;
    setSelected(foundService ?? services[0].name);
  }, [location]);

  return selected;
};
