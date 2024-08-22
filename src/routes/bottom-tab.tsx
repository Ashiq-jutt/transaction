import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import * as SVGS from '../assets/SVG/user-tab-icon';
import {colors} from '../config/colors';
import {mvs} from '../config/metrices';
import {Funds, Home, Withdraw} from '../screens/app';
import History from '../screens/app/history';
import ScreenNames from './routes';

interface TabBarProps {
  routeName: string;
  selectedTab: string;
  navigate: (routeName: string) => void;
}

export default function MyTabBar() {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    const IconComponent = SVGS[routeName];

    return (
      <View style={styles.iconContainer}>
        <IconComponent
          color={routeName === selectedTab ? colors.primary : colors.textGray}
        />
        <Text
          style={{
            color: routeName === selectedTab ? colors.primary : colors.textGray,
            marginTop: mvs(3),
          }}>
          {routeName}
        </Text>
      </View>
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}: TabBarProps) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={60}
      circleWidth={50}
      bgColor={colors.white}
      initialRouteName={ScreenNames.FUNDS}
      screenOptions={{
        headerShown: false,
      }}
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name={ScreenNames.HOME}
        component={Home}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name={ScreenNames.FUNDS}
        position="LEFT"
        component={Funds}
      />
      <CurvedBottomBar.Screen
        name={ScreenNames.HISTORY}
        position="RIGHT"
        component={History}
      />
      <CurvedBottomBar.Screen
        name={ScreenNames.WITHDRAW}
        component={Withdraw}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}

export const styles = StyleSheet.create({
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  plusText: {
    color: colors.white,
    fontSize: mvs(24),
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: mvs(50),
    height: mvs(50),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    bottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: colors.white,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 60,
    height: 60,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
