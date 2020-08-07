import axios from 'axios';
import { IP_URL } from '@/utils/constants';
import { Location } from '@/store/data-types';

export default {
  fetchLocation: async () => {
    const response = await axios.get(IP_URL);
    return (response.data as Location);
  },
};
