import axios from 'axios';
import React from 'react';
import {Alert, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {URLS} from '../../../api/api-urls';
import {
  Button,
  InputField,
  LargeText,
  SmallText,
  Spacer,
} from '../../../components';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import {setLogin} from '../../../redux/authSlice';
import styles from './styles';
interface FormData {
  email: string;
  password: string;
}
// demo@harvestapp.com
// HarvestTest#456
export default function Login({}) {
  const [email, setEmail] = React.useState('demo@harvestapp.com');
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState('HarvestTest#456');
  const dispatch = useDispatch();

  const loginHandler = async () => {
    try {
      setLoading(true);
      const loginPayload = {
        email: email,
        password: password,
      };
      dispatch(setLogin('token'));
      console.log(URLS.auth.login, loginPayload, 'payloads');

      const response = await axios.post(
        'https://getharvest.app/auth/login',
        loginPayload,
      );

      const token = response.data.token;
      console.log('JWT Token:', token);

      dispatch(setLogin(token));
    } catch (error) {
      console.log('Error during login :', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Spacer vertical={mvs(27)} />
      <LargeText textStyles={styles.loginText}>Login</LargeText>
      <Spacer vertical={mvs(5)} />
      <InputField
        value={email}
        keyboardType="email-address"
        onChangeText={(text: string) => setEmail(text)}
        placeholder="Email address"
      />
      <InputField
        secureTextEntry
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        placeholder="Login pin"
      />
      <View style={{flexDirection: 'row'}}>
        <SmallText color={colors.textGray} textAlign="left">
          {' Forgot Pin? '}
        </SmallText>
        <SmallText color={colors.primary}>reset</SmallText>
      </View>
      <Spacer vertical={mvs(7)} />
      <Button disabled={loading} onPress={loginHandler}>
        Login
      </Button>
    </View>
  );
}
