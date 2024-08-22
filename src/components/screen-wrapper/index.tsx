import {useIsFocused} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

interface Props {
  children?: any;
  statusBarColor?: string;
  transclucent?: boolean;
  scrollEnabled?: boolean;
  barStyle?: string;
  imageBackgroundColor?: string;
  backgroundColor?: string;
  contentContainerStyle?: ViewStyle;
  footerUnScrollable?: () => void;
  containerViewStyle?: ViewStyle;
  headerUnScrollable?: () => void;
  backgroundImage?: any;
}
export default function ScreenWrapper({
  children,
  statusBarColor = colors.white,
  transclucent = false,
  scrollEnabled = false,
  backgroundImage,
  containerViewStyle = {},
  contentContainerStyle = {},
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  backgroundColor = colors.transparent,
  imageBackgroundColor = colors.black,
  barStyle = 'dark-content',
}: Props) {
  if (backgroundImage) {
    backgroundColor = colors.transparent;
  }
  function FocusAwareStatusBar(props: any) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  const content = () => {
    return (
      <>
        {headerUnScrollable()}
        <View
          style={[
            styles.mainViewContainer,
            containerViewStyle,
            {
              backgroundColor: transclucent
                ? colors.transparent
                : backgroundColor,
            },
          ]}>
          {scrollEnabled ? (
            <KeyboardAwareScrollView
              contentContainerStyle={[
                styles.contentContainer,
                contentContainerStyle,
              ]}
              keyboardShouldPersistTaps="handled"
              extraScrollHeight={mvs(8)}
              showsVerticalScrollIndicator={false}>
              {children}
            </KeyboardAwareScrollView>
          ) : (
            children
          )}
          {footerUnScrollable()}
        </View>
      </>
    );
  };
  return (
    <Fragment>
      <FocusAwareStatusBar
        barStyle={barStyle}
        backgroundColor={statusBarColor}
        translucent={transclucent}
      />
      {!transclucent && (
        <SafeAreaView style={{backgroundColor: statusBarColor}} />
      )}
      {backgroundImage ? (
        <ImageBackground
          source={backgroundImage}
          style={[styles.container, {backgroundColor: imageBackgroundColor}]}
          resizeMode={'cover'}>
          {content()}
        </ImageBackground>
      ) : (
        content()
      )}
    </Fragment>
  );
}
