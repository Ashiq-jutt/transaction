import React, {useEffect} from 'react';
import {Header, ScreenWrapper, SmallText} from '../../../components';
import {colors} from '../../../config/colors';
import {useDispatch, useSelector} from 'react-redux';
import {useFetchFunds} from '../../../hooks/useFetchFunds';
import {RootState} from '../../../redux/store';
import {URLS} from '../../../api/api-urls';
import {View} from 'react-native';
import axios from 'axios';
export default function Funds({}) {
  const dispatch = useDispatch();
  const {data, error, isLoading} = useFetchFunds();
  const {token} = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    const fetchFundsData = async () => {
      try {
        const response = await axios.get('https://getharves.app/funds/all');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // fetchFundsData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Header>Mutual Funds</Header>
    </View>
  );
}
