import React, {ReactNode} from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {LargeText, SmallText} from '../text';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import {LeftIcon} from '../../assets/SVG';

interface HeaderProps {
  children?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({children = '', containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity>
        <LeftIcon />
      </TouchableOpacity>
      <LargeText textStyles={styles.textStyle}>{children}</LargeText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    gap: mvs(12),
    justifyContent: 'flex-start',
    paddingVertical: mvs(25),
    paddingHorizontal: mvs(20),
    elevation: 5,
  },
  textStyle: {color: colors.black, fontSize: mvs(24), fontWeight: '600'},
});
