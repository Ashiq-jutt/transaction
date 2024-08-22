import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const FilterIcon = props => (
  <Svg
    width={18}
    height={16}
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.90693 -9.64651e-05C5.93791 -3.64651e-05 5.96894 1.34459e-05 6 1.34459e-05C6.0311 1.34459e-05 6.0621 -3.64651e-05 6.0931 -9.64651e-05C6.4618 -0.000706465 6.8242 -0.00130674 7.147 0.0851933C8.0098 0.316363 8.6836 0.990234 8.9148 1.85296C9.0013 2.1758 9.0007 2.53821 9.0001 2.90693C9.0001 2.93792 9 2.96895 9 3.00001H17C17.5523 3.00001 18 3.44772 18 4.00001C18 4.55229 17.5523 5.00001 17 5.00001H9C9 5.03107 9.0001 5.0621 9.0001 5.09309C9.0007 5.46181 9.0013 5.82422 8.9148 6.1471C8.6836 7.0098 8.0098 7.6837 7.147 7.9148C6.8242 8.0013 6.4618 8.0007 6.0931 8.0001C6.0621 8.0001 6.0311 8 6 8C5.96894 8 5.93791 8.0001 5.90692 8.0001C5.5382 8.0007 5.17579 8.0013 4.85295 7.9148C3.99022 7.6837 3.31635 7.0098 3.08519 6.1471C2.99868 5.82421 2.99928 5.46181 2.9999 5.09308C2.99995 5.0621 3 5.03106 3 5.00001H1C0.44772 5.00001 0 4.55229 0 4.00001C0 3.44772 0.44772 3.00001 1 3.00001H3C3 2.96895 2.99995 2.93792 2.9999 2.90693C2.99928 2.53821 2.99868 2.1758 3.08519 1.85296C3.31635 0.990234 3.99022 0.316363 4.85295 0.0851933C5.17579 -0.00130674 5.5382 -0.000706465 5.90693 -9.64651e-05ZM5.49861 2.00536C5.39195 2.01022 5.36685 2.01805 5.37059 2.01704C5.19804 2.06328 5.06327 2.19805 5.01704 2.3706C5.0162 2.37411 5.00963 2.40483 5.00535 2.49861C5.00024 2.61064 5 2.75845 5 3.00001V5.00001C5 5.24156 5.00024 5.38937 5.00535 5.5014C5.01021 5.60806 5.01804 5.63315 5.01704 5.62942C5.06327 5.80196 5.19804 5.93674 5.37059 5.98297C5.36685 5.98197 5.39195 5.98979 5.49861 5.99466C5.61063 5.99977 5.75844 6 6 6C6.2416 6 6.3894 5.99977 6.5014 5.99466C6.608 5.98979 6.6331 5.98197 6.6294 5.98297C6.802 5.93674 6.9367 5.80196 6.983 5.62942C6.982 5.63315 6.9898 5.60806 6.9946 5.5014C6.9998 5.38937 7 5.24156 7 5.00001V3.00001C7 2.75845 6.9998 2.61064 6.9946 2.49861C6.9898 2.39196 6.982 2.36686 6.983 2.3706M5.49861 2.00536C5.61063 2.00025 5.75844 2.00001 6 2.00001L5.49861 2.00536ZM6 2.00001C6.2416 2.00001 6.3894 2.00025 6.5014 2.00536L6 2.00001ZM6.5014 2.00536C6.5952 2.00963 6.6259 2.0162 6.6294 2.01704L6.5014 2.00536ZM11.9069 7.9999C11.9379 8 11.9689 8 12 8C12.0311 8 12.0621 8 12.0931 7.9999C12.4618 7.9993 12.8242 7.9987 13.147 8.0852C14.0098 8.3164 14.6836 8.9902 14.9148 9.853C15.0013 10.1758 15.0007 10.5382 15.0001 10.9069C15.0001 10.9379 15 10.9689 15 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H15C15 13.0311 15.0001 13.0621 15.0001 13.0931C15.0007 13.4618 15.0013 13.8242 14.9148 14.1471C14.6836 15.0098 14.0098 15.6837 13.147 15.9148C12.8242 16.0013 12.4618 16.0007 12.0931 16.0001C12.0621 16.0001 12.0311 16 12 16C11.9689 16 11.9379 16.0001 11.9069 16.0001C11.5382 16.0007 11.1758 16.0013 10.853 15.9148C9.9902 15.6837 9.3164 15.0098 9.0852 14.1471C8.9987 13.8242 8.9993 13.4618 8.9999 13.0931C8.9999 13.0621 9 13.0311 9 13H1C0.44772 13 0 12.5523 0 12C0 11.4477 0.44772 11 1 11H9C9 10.969 8.9999 10.9379 8.9999 10.9069C8.9993 10.5382 8.9987 10.1758 9.0852 9.853C9.3164 8.9902 9.9902 8.3164 10.853 8.0852C11.1758 7.9987 11.5382 7.9993 11.9069 7.9999ZM11.4986 10.0054C11.392 10.0102 11.3669 10.018 11.3706 10.017C11.198 10.0633 11.0633 10.1981 11.017 10.3706C11.018 10.3669 11.0102 10.392 11.0054 10.4986C11.0002 10.6106 11 10.7585 11 11V13C11 13.2416 11.0002 13.3894 11.0054 13.5014C11.0102 13.6081 11.018 13.6332 11.017 13.6294C11.0633 13.802 11.198 13.9367 11.3706 13.983C11.3669 13.982 11.392 13.9898 11.4986 13.9947C11.6106 13.9998 11.7584 14 12 14C12.2416 14 12.3894 13.9998 12.5014 13.9947C12.608 13.9898 12.6331 13.982 12.6294 13.983C12.802 13.9367 12.9367 13.802 12.983 13.6294C12.982 13.6332 12.9898 13.6081 12.9946 13.5014C12.9998 13.3894 13 13.2416 13 13V11C13 10.7585 12.9998 10.6106 12.9946 10.4986C12.9898 10.392 12.982 10.3669 12.983 10.3706C12.9367 10.1981 12.802 10.0633 12.6294 10.017C12.6331 10.018 12.608 10.0102 12.5014 10.0054C12.3894 10.0002 12.2416 10 12 10C11.7584 10 11.6106 10.0002 11.4986 10.0054Z"
      fill="#667085"
    />
  </Svg>
);
export default FilterIcon;
