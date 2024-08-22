import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../config/colors';
const EyeIcon = ({color = colors.textGray}) => (
  <Svg
    width={22}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M19.4 16.5L4.4 1.5M9.2 7.44157C8.82658 7.85326 8.6 8.39403 8.6 8.98631C8.6 10.2761 9.67452 11.3217 11 11.3217C11.6111 11.3217 12.1689 11.0994 12.5927 10.7334M19.4388 11.3217C20.265 10.0848 20.6 9.07613 20.6 9.07613C20.6 9.07613 18.4154 2.1 11 2.1C10.5837 2.1 10.1839 2.12199 9.8 2.16349M16.4 14.3494C15.0226 15.2281 13.2493 15.8495 11 15.8127C3.67692 15.693 1.4 9.07613 1.4 9.07613C1.4 9.07613 2.45786 5.69808 5.6 3.64332"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default EyeIcon;
