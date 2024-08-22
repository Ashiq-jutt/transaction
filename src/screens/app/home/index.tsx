import React from 'react';
import {ScreenWrapper, SmallText} from '../.././../components';
import {colors} from '../../../config/colors';

export default function Home() {
  return (
    <ScreenWrapper statusBarColor={colors.white} barStyle="dark-content">
      <SmallText>Home</SmallText>
    </ScreenWrapper>
  );
}
