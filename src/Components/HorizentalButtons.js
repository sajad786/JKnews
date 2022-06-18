import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';
import colors from '../styles/colors';

const HorizentalButtons = ({Btndata, UpdateIsActiveBtn, isActiveBtn}) => {
  console.log(Btndata, 'btnDtaa');
  const _renderMultipleButtons = ({item}) => {
    console.log(item, 'items');
    return (
      <TouchableOpacity
        onPress={() => UpdateIsActiveBtn(item.id)}
        style={{
          //   height: moderateScaleVertical(42),
          backgroundColor:
            isActiveBtn == item.id ? 'red' : colors.Lightthingrey,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: moderateScaleVertical(10),
          paddingHorizontal: moderateScale(15),
          marginRight: moderateScale(30),
          borderRadius: moderateScale(15),
        }}>
        <Text
          style={{
            color: isActiveBtn == item.id ? colors.white : colors.lightgrey,
            fontSize: textScale(14),
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <FlatList
        data={Btndata}
        renderItem={_renderMultipleButtons}
        extraData={item => item.id}
        horizontal
      />
    </>
  );
};

export default HorizentalButtons;
