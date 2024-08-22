import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DownIcon = props => (
  <Svg
    width={12}
    height={8}
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.8 1.6L5.99999 6.4L1.19999 1.6"
      stroke="#667085"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DownIcon;
