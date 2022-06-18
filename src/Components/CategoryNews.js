import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';
import colors from '../styles/colors';
import navigationStrings from '../navigation/navigationStrings';
import {useNavigation} from '@react-navigation/native';

const CategoryNews = ({categoryNewsdata, isActiveBtn, btnData}) => {
  const navigation = useNavigation();

  console.log({categoryNewsdata, isActiveBtn}, 'newsss');
  const MoveToNextScreen = (ScreenName, data) => {
    // alert(JSON.stringify({ScreenName, data}));
    navigation.navigate(ScreenName, {item: data});
  };

  const _renderNews = ({item}) => {
    console.log(item, 'newsItem');
    return (
      <TouchableOpacity
        onPress={() => {
          MoveToNextScreen(navigationStrings.CARDVIEWDETAILS);
        }}
        style={{
          height: moderateScaleVertical(200),
          width: moderateScale(200),
          marginRight: moderateScale(16),
          //   borderRadius: moderateScale(8),
          backgroundColor: 'red',
          borderRadius: moderateScale(20),
          //   backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <ImageBackground
          imageStyle={{
            borderRadius: moderateScale(20),
            resizeMode: 'cover',
          }}
          //   blurRadius={10}

          style={{
            flexDirection: 'column',
            justifyContent: 'flex-end',
            height: moderateScaleVertical(200),
            width: moderateScale(200),
            marginRight: moderateScale(16),
          }}
          source={{uri: item.image}}>
          <Text
            style={{
              color: colors.white,
              alignSelf: 'baseline',
              padding: moderateScale(10),
              fontSize: textScale(18),
              fontWeight: '500',
              //   justifyContent: 'flex-end',
            }}>
            {item.heading}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      horizontal
      data={categoryNewsdata}
      renderItem={_renderNews}
      keyExtractor={(item, i) => i}
    />
  );
};

export default CategoryNews;
