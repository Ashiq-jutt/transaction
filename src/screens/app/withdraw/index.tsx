import React from 'react';
import {ScreenWrapper, SmallText} from '../../../components';
import {colors} from '../../../config/colors';

export default function Withdraw() {
  return (
    <ScreenWrapper statusBarColor={colors.white} barStyle="dark-content">
      <SmallText>{'Detail'}</SmallText>
    </ScreenWrapper>
  );
}
