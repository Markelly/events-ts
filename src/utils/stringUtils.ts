import { EventResponse } from '@/store/data-types';

export const getPrice = (item: EventResponse) => {
  const min = item.priceRanges ? item.priceRanges[0].min : 0;
  const max = item.priceRanges ? item.priceRanges[0].max : 0;
  return item.priceRanges ? `€${min} - €${max}` : 'Free';
};

export const getImageContext = (icon: string) => {
  const images = require.context('../images', false, /\.png$/);
  return images(`./${icon}.png`);
};

export default {
  getPrice,
  getImageContext
};
