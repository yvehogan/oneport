import axios from 'axios';
import { useQuery } from 'react-query';

import endpoints from './endpoints';

axios.defaults.baseURL = 'https://demo3522726.mockable.io';

const useFetchData = ({
  queryKey = [], endpoint = '', enabled = true, extra = null, param = null
} = {}) => useQuery(
  queryKey,
  async () => {
    let url = endpoints[endpoint] || endpoint;

    if (extra) {
      url += `/${extra}`;
    }
    if (param) {
      url += `/${param}`;
    }

    return axios.get(url);
  },
  { enabled }
);

export default useFetchData;
