import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ArrowDown = props => (
  <Svg
    width={8}
    height={8}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4 0.5V7.5M4 0.5L1 3.5M4 0.5L7 3.5"
      stroke="#027A48"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ArrowDown;
