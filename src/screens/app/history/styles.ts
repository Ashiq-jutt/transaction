import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: mvs(3),
  },
});
export default styles;
