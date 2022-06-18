import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings';
import colors from '../../styles/colors';
import {styles} from './styles';

const Search = ({navigation}) => {
  const [state, setState] = useState({
    Search,
  });

  const {Search} = state;

  const updateState = data => {
    setState({
      ...state,
      data: data,
    });
  };
  const MoveToNextScreen = (ScreenName, data) => {
    navigation.navigate(ScreenName, {data});
  };
  return (
    <WrapperContainer>
      <Header
        leftIcon={imagePath.back_arrow}
        title="Search"
        titlestyle={{color: colors.black}}
        onLeftPress={() => MoveToNextScreen(navigationStrings.HOME)}
      />
      <View style={styles.searchView}>
        <TextInput
          style={styles.placeholerSearch}
          value={Search}
          onChange={Search => updateState({Search})}
          placeholder="Search"
        />
        <TouchableOpacity onPress={() => alert('in Process')}>
          <Image source={imagePath.search} style={styles.searchIconstyle} />
        </TouchableOpacity>
      </View>
    </WrapperContainer>
  );
};

export default Search;
