import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { YELP_API_KEY } from '@env';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
});
