import axios from 'axios';
import {URLS} from './api-urls';

export const getFunds = () => {
  return axios.get(`${URLS.funds.get_all_funds}`);
};
