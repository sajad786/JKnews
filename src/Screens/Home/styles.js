import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.blue,
    flex: 1,
  },
  searchIconstyle: {
    marginHorizontal: moderateScale(10),
    height: moderateScaleVertical(24),
    width: moderateScale(24),
    tintColor: colors.lightgrey,
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScaleVertical(42),
    backgroundColor: colors.whitewithGrey,
  },
});
