import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import WrapperContainer from '../../Components/WrapperContainer';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';

import {HeaderNewsData, horizentalButtonsData} from './data';
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {Search} from '../../Screens';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import navigationStrings from '../../navigation/navigationStrings';
import HorizentalButtons from '../../Components/HorizentalButtons';
import CategoryNews from '../../Components/CategoryNews';
import axios from 'axios';
import actions from '../../redux/actions';

const Home = () => {
  const navigation = useNavigation();
  const [isActiveBtn, setIsActiveBtn] = useState(false);

  // const getApiData = async () => {
  //   try {
  //     const res = await axios.get('http://qnstv.com/api/categories.php');
  //     // const data = JSON.stringify(res);
  //     console.log(res, 'res>>>');
  //   } catch (e) {
  //     console.log(e, 'errorinapi');
  //   }
  // };

  useEffect(() => {
    actions.newsDataHeading();
  }, []);

  const UpdateIsActiveBtn = data => {
    setIsActiveBtn(data);
  };

  console.log(HeaderNewsData, 'categaressss');
  const MoveToNextScreen = (ScreenName, data) => {
    // alert(JSON.stringify({ScreenName, data}));
    navigation.navigate(ScreenName, {item: data});
  };

  const renderNewsVertical = ({item}) => {
    const description = item.description.split(' ').slice(0, 4);
    const datas = description.toString();
    var newStr = datas.replace(/,/g, ' ');
    // const datas = description.toString().split(',', ' ');
    console.log(newStr, 'itemmmss>>');
    return (
      <TouchableOpacity
        onPress={() => {
          MoveToNextScreen(navigationStrings.NEWSDETAILS, {item});
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: moderateScaleVertical(100),
        }}>
        <View>
          <Image
            style={{
              height: moderateScaleVertical(80),
              width: moderateScale(80),
              borderRadius: moderateScale(10),
            }}
            source={{uri: item?.image}}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginLeft: moderateScale(20),
          }}>
          <Text style={{color: colors.lightgrey, fontSize: textScale(12)}}>
            {item?.state}
          </Text>
          <Text style={{color: colors.black, fontSize: textScale(18)}}>
            {item?.heading}
          </Text>
          {!!(item?.description?.length > 4) && (
            <Text style={{color: colors.black}}>{newStr}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <ScrollView style={styles.container}>
        <Header
          leftIcon={imagePath.hamburger}
          title="Home"
          titlestyle={{color: colors.black}}
          onLeftPress={() => alert('in process')}
        />
        <View style={{marginTop: moderateScaleVertical(6)}}>
          <Text
            style={{
              color: colors.black,
              fontSize: textScale(24),
              fontWeight: '600',
              marginBottom: moderateScaleVertical(6),
            }}>
            Browse
          </Text>
          <Text
            style={{
              color: colors.lightgrey,
              // fontSize: textScale(24),
              // fontWeight: '600',
              marginBottom: moderateScaleVertical(8),
            }}>
            Discover things of the World
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => MoveToNextScreen(navigationStrings.SEARCH)}
          activeOpacity={0.8}
          style={styles.searchView}>
          <Image source={imagePath.search} style={styles.searchIconstyle} />
          <Text style={{color: colors.lightgrey, fontSize: textScale(16)}}>
            search
          </Text>
        </TouchableOpacity>
        <View style={{marginVertical: moderateScaleVertical(15)}}>
          <HorizentalButtons
            UpdateIsActiveBtn={UpdateIsActiveBtn}
            Btndata={horizentalButtonsData}
            isActiveBtn={isActiveBtn}
          />
        </View>
        <View style={{marginVertical: moderateScaleVertical(8)}}>
          <CategoryNews
            // isActiveBtn={isActiveBtn}
            categoryNewsdata={HeaderNewsData}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: moderateScaleVertical(10),
          }}>
          <Text
            style={{
              fontSize: textScale(16),
              fontWeight: '600',
              color: colors.black,
            }}>
            Recommended for you
          </Text>
          <Text style={{color: colors.lightgrey}}>see All</Text>
        </View>
        <View>
          <FlatList
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={HeaderNewsData}
            renderItem={renderNewsVertical}
            keyExtractor={(item, i) => i}
            ListFooterComponent={() => (
              <View style={{paddingBottom: moderateScaleVertical(5)}} />
            )}
          />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default Home;
