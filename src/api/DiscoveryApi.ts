import axios from 'axios';
import { API_KEY, DISCOVER_URL } from '@/utils/constants';

export default {
  fetchEvents: async (
    page: number,
    sort: string,
    countryCode: string,
    latLong: string
  ) => {
    // TODO: try catch
    if (sort === '' || sort === undefined) {
      sort = 'date,asc';
    }
    const response = await axios.get(
      `${DISCOVER_URL}/events.json?countryCode=${countryCode}&apikey=${API_KEY}&page=${page}&sort=${sort}&latlong=${latLong}`
    );
    return response.data;
  }
};
