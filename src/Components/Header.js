import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
// import fontFamily from '../styles/fontFamily'
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';

const Header = ({
  onLeftPress = {},
  title,
  onRightPress,
  leftIcon = {},
  container = '',
  rightIcon = {},
  titlestyle = {},
}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{...styles.container, container}}>
      <View>
        {!!leftIcon && (
          <TouchableOpacity
            style={styles.iconstyle}
            onPress={!!onLeftPress ? onLeftPress : () => goBack()}>
            <Image style={styles.iconstyle} source={leftIcon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{marginRight: !!leftIcon ? moderateScale(10) : null}}>
        <Text style={{...styles.headertext, ...titlestyle}}>{title}</Text>
      </View>
      <View>
        {!!rightIcon && (
          <TouchableOpacity
            style={styles.iconstyle}
            onPress={!!onRightPress ? onRightPress : () => goBack()}>
            <Image style={styles.iconstyle} source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    height: moderateScale(42),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headertext: {
    color: colors.white,
    // fontFamily: fontFamily.BarlowSemiBold,
    fontSize: textScale(16),
    // paddingLeft: moderateScale(20),
  },
  iconstyle: {
    // marginTop: moderateScale(7),
    // paddingHorizontal: moderateScale(4),
    height: moderateScaleVertical(24),
    width: moderateScale(24),
  },
});
