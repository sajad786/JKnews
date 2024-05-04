import {View, Text, TextInput, Button, Modal} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import actions from '../../redux/actions';
import strings, {changeLaguage} from '../../constants/lang';
import { height, moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [languageModal, setLanguageModal] = useState(false);

  const OnChangeLanguage = langCode => {
    setLanguageModal(false);
    switch (langCode) {
      case 'en':
        changeLaguage('en');
        break;
      case 'ur':
        changeLaguage('ur');
        break;
      default:
        break;
    }
  };

  const onSignUp = () => {
    alert()
    const data = {email, password};
    if (
      email != '' &&
      email != undefined &&
      password != '' &&
      password != undefined
    ) {
      // console.log(data, 'data');
      actions.signup(data);
    } else {
      alert('please input valid data');
      return;
    }
  };

  return (
    <WrapperContainer>
      <TextInput
      style={{backgroundColor: 'grey',height:moderateScaleVertical(42), color:'white', paddingHorizontal:moderateScale(5) }}
        placeholder={strings.EMAIL}
        placeholderTextColor="black"
        value={email}
        onChangeText={emaitext => setEmail(emaitext)}
      />
      <View style={{marginBottom: 10}} />
      <TextInput
        style={{backgroundColor: 'grey',height:moderateScaleVertical(42), color:'white', paddingHorizontal:moderateScale(5) }}
        placeholder={strings.PASSWORD}
        placeholderTextColor="black"
        value={password}
        onChangeText={pass => setPassword(pass)}
      />

      <View style={{marginBottom: 10}} />
      <Button onPress={onSignUp} title={strings.LOGIN} />
      <View style={{marginBottom: 10}} />
      <Button onPress={() => setLanguageModal(true)} title={strings.LANGUAGE} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={languageModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setLanguageModal(!languageModal);
        }}>
        <View style={{flex: 0.9, backgroundColor: 'rgba(0,0,0,0.3)'}}>
          <View
            style={{
              // height: 300,
              width: '100%',
              position: 'absolute',
              bottom: 0,
              // left: 0,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{color: 'black', fontSize: 20}}
              onPress={() => OnChangeLanguage('ur')}>
              urdu
            </Text>
            <View style={{marginBottom: 10}} />
            <Text
              style={{color: 'black', fontSize: 20}}
              onPress={() => OnChangeLanguage('en')}>
              English
            </Text>
          </View>
        </View>
      </Modal>
    </WrapperContainer>
  );
};

export default Signup;
