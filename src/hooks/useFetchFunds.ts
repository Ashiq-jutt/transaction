import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchFunds = async () => {
  const {data} = await axios.get('https://api.getharvest.app/funds/all');
  return data;
};

export const useFetchFunds = () => {
  return useQuery({
    queryKey: ['fetchData'],
    queryFn: fetchFunds,
  });
};
