import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    borderRadius: mvs(10),
    width: '100%',
    paddingVertical: mvs(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryContainer: {
    backgroundColor: colors.primary,
  },
  secondaryContainer: {
    backgroundColor: colors.textGray,
  },
});

export default styles;
