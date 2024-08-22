import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(15),
  },
  loginText: {
    color: colors.black,
    fontSize: mvs(20),
    fontWeight: '500',
  },
  inputContainer: {
    paddingHorizontal: mvs(20),
    borderRadius: mvs(2),
  },
});
export default styles;
