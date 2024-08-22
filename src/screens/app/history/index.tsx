import React from 'react';
import {ScreenWrapper, SmallText} from '../../../components';
import {colors} from '../../../config/colors';

export default function History() {
  return (
    <ScreenWrapper statusBarColor={colors.white} barStyle="dark-content">
      <SmallText>{'History'}</SmallText>
    </ScreenWrapper>
  );
}
