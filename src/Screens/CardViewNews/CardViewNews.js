import {View, Text} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import HorizentalButtons from '../../Components/HorizentalButtons';
import {horizentalButtonsData} from '../Home/data';
import {moderateScaleVertical} from '../../styles/responsiveSize';
import navigationStrings from '../../navigation/navigationStrings';
import {useNavigation} from '@react-navigation/native';

const CardViewNews = ({categoryNewsdata}) => {
  const navigation = useNavigation();
  console.log(categoryNewsdata, ' newsdata>>>');
  const [isActiveBtn, setIsActiveBtn] = useState(false);

  const UpdateIsActiveBtn = data => {
    setIsActiveBtn(data);
  };

  const MoveToNextScreen = (ScreenName, data) => {
    // alert(JSON.stringify({ScreenName, data}));
    navigation.navigate(ScreenName, {item: data});
  };
  return (
    <WrapperContainer>
      <Header
        leftIcon={imagePath.back_arrow}
        title="Search"
        titlestyle={{color: colors.black}}
        onLeftPress={() => MoveToNextScreen(navigationStrings.HOME)}
      />
      <View style={{marginVertical: moderateScaleVertical(15)}}>
        <HorizentalButtons
          UpdateIsActiveBtn={UpdateIsActiveBtn}
          Btndata={horizentalButtonsData}
          isActiveBtn={isActiveBtn}
        />
      </View>

      {/* card view of news is here  */}
    </WrapperContainer>
  );
};

export default CardViewNews;
