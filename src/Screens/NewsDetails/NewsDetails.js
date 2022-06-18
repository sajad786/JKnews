import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../styles/responsiveSize';

const NewsDetails = ({navigation, route}) => {
  const [newsItem, setNewsItem] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const {item} = route?.params?.item;

  console.log(item, 'route');

  useEffect(() => {
    setNewsItem(item);
  }, []);

  const MoveToNextScreen = (ScreenName, data) => {
    navigation.navigate(ScreenName, {item: data});
  };
  return (
    <WrapperContainer>
      <Header
        leftIcon={imagePath.back_arrow}
        title={newsItem.heading}
        titlestyle={{color: colors.black}}
        onLeftPress={() => MoveToNextScreen(navigationStrings.HOME)}
        rightIcon={imagePath.share}
        onRightPress={() => alert('inProces')}
      />
      <View style={{height: height / 4}}>
        <Image
          source={{uri: newsItem.image}}
          style={{
            height: height / 4,
            borderRadius: moderateScale(10),
            resizeMode: 'cover',
          }}
        />
      </View>

      <View
        style={{
          marginTop: moderateScaleVertical(10),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {isLiked ? (
            <TouchableOpacity
              onPress={() => {
                setIsLiked(!isLiked);
              }}>
              <Image
                style={{
                  height: moderateScaleVertical(42),
                  width: moderateScale(42),
                  tintColor: 'red',
                }}
                source={imagePath.heartFilled}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setIsLiked(!isLiked);
              }}>
              <Image
                style={{
                  height: moderateScaleVertical(42),
                  width: moderateScale(42),
                  tintColor: 'red',
                }}
                source={imagePath.heartOuiline}
              />
            </TouchableOpacity>
          )}
          {!!isLiked ? (
            <Text style={{color: colors.black, marginLeft: moderateScale(10)}}>
              1
            </Text>
          ) : (
            <Text style={{color: colors.black, marginLeft: moderateScale(10)}}>
              0
            </Text>
          )}
        </View>
        <Text
          style={{
            color: colors.black,
            fontSize: textScale(16),
            padding: moderateScale(10),
            backgroundColor: 'red',
            borderRadius: moderateScale(5),
            color: colors.white,
          }}>
          {newsItem?.state}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: colors.black,
            fontSize: textScale(18),
            fontWeight: '500',
            marginVertical: moderateScaleVertical(15),
          }}>
          {newsItem?.heading}
        </Text>
        <Text style={{color: colors.black}}>{newsItem?.description}</Text>
      </View>
    </WrapperContainer>
  );
};

export default NewsDetails;
