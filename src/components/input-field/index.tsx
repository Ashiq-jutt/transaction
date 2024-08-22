import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {EyeIcon, EyeOpenIcon} from '../../assets/SVG';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import {Row} from '../row';
import {SmallText} from '../text';

type InputFieldProps = {
  label?: string;
  keyboardType?: string;
  placeholderTextColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
  value: string;
  placeholder: string;
  onChangeText: (val: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  secureTextEntry = false,
  containerStyle,
  placeholderTextColor = colors.textGray,
  inputStyle,
  placeholder,
  value,
  keyboardType = 'default',
  onChangeText,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <SmallText color={colors.white}>{label}</SmallText>}
      <Row style={{alignItems: 'center', paddingRight: mvs(15)}}>
        <TextInput
          value={value}
          style={[
            styles.input,
            {width: secureTextEntry ? '88%' : '100%'},
            inputStyle,
          ]}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={isSecure}
          onChangeText={onChangeText}
        />
        {secureTextEntry && (
          <TouchableOpacity activeOpacity={0.7} onPress={toggleSecureEntry}>
            {isSecure ? <EyeIcon /> : <EyeOpenIcon />}
          </TouchableOpacity>
        )}
      </Row>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderWidth: mvs(0.5),
    borderColor: colors.textGray,
    borderRadius: mvs(12),
    marginBottom: mvs(9),
    margin: mvs(1),
    width: '100%',
  },
  input: {
    backgroundColor: colors.secondary,
    paddingHorizontal: mvs(10),
    borderRadius: mvs(12),
    color: colors.black,
    width: '100%',
  },
});
