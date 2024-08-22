import React, {FC, ReactNode} from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../../config/colors';
import styles from './styles';
import {SmallText} from '../text';

interface ButtonProps extends TouchableOpacityProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary';
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  onPress,
  children,
  variant = 'primary',
  containerStyle,
  textStyle,
  disabled = false,
  ...restProps
}) => {
  const containerStyles = [
    styles.container,
    variant === 'primary' || disabled
      ? styles.primaryContainer
      : styles.secondaryContainer,
    containerStyle,
  ];

  const textColor = variant === 'primary' ? colors.gray : colors.white;

  return (
    <TouchableOpacity
      style={containerStyles}
      onPress={onPress}
      disabled={disabled}
      {...restProps}>
      <SmallText color={textColor} textStyles={textStyle}>
        {children}
      </SmallText>
    </TouchableOpacity>
  );
};

export default Button;
