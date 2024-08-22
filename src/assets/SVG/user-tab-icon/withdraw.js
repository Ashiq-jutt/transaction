import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../config/colors';
const Withdraw = ({color = colors.textGray}) => (
  <Svg
    width={13}
    height={14}
    viewBox="0 0 13 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6.89999 13V1M6.89999 13L1.89999 8M6.89999 13L11.9 8"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Withdraw;
