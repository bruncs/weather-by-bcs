import { schema } from 'normalizr';
import { City } from '../../store/cities/types';

const cityProcessStrategy = (entity) => {
  const { id, name, main } = entity;
  const normalizedCity: City = {
    id,
    name,
    minTemp: main.temp_min,
    maxTemp: main.temp_max,
  };
  return normalizedCity;
};

export const citySchema = new schema.Entity('cities', {}, { processStrategy: cityProcessStrategy });

export const cityListSchema = new schema.Array(citySchema);
