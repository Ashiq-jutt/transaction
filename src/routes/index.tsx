import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useSelector} from 'react-redux';

import Login from '../screens/auth/login';
import UserTab from './bottom-tab';
import ScreenNames from './routes';
import {RootState} from '../redux/store';
const Stack = createNativeStackNavigator();

export default function Routes() {
  const {token} = useSelector((state: RootState) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.LOGIN}
        screenOptions={{header: () => false}}>
        {!token ? (
          <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
        ) : (
          <Stack.Screen name={ScreenNames.USER_TAB} component={UserTab} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
