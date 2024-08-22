import React, {FC, ReactNode} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

interface TextProps {
  children: ReactNode;
  size?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
  textStyles?: any;
  textProps?: any;
  onPress?: (() => void) | undefined;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
}

const CustomText: FC<TextProps> = ({
  children,
  size = 4.5,
  textAlign = 'auto',
  color = colors.black,
  textStyles,
  textProps,
  onPress,
  textDecorationLine = 'none',
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: mvs(size),
      color: color,
      textAlign: textAlign,
      textDecorationLine: textDecorationLine,
    },
  });

  return (
    <Pressable disabled={!onPress} onPress={onPress}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};

export const LargeText: FC<TextProps> = props => (
  <CustomText {...props} size={18} />
);
export const MediumText: FC<TextProps> = props => (
  <CustomText {...props} size={16} />
);
export const SmallText: FC<TextProps> = props => (
  <CustomText {...props} size={14} />
);
export const UnderLineText: FC<TextProps> = props => (
  <CustomText {...props} size={12} textDecorationLine="underline" />
);

export default CustomText;
