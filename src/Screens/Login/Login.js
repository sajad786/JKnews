import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity
}
  from 'react-native';
import React from 'react';
import { styles } from './styles';
import WrapperContainer from '../../Components/WrapperContainer';
import {
  height, moderateScale, moderateScaleVertical,
  textScale, width
} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import ButtonComponent from '../../Components/Button';
import imagePath from '../../constants/imagePath';
import Header from '../../Components/Header';

const Login = () => {
  return (
    <WrapperContainer style={styles.wrapper}>

      <View style={styles.container}>
        <Image style={styles.logo}
          source={imagePath.logo_edu} />
      </View>
      <View style={styles.mainview}>
        <View style={styles.welcomeview}>
          <Text style={styles.welcometxt}>Welcome</Text>
        </View>
        <View style={{
          marginTop: moderateScaleVertical(25)
        }}>
          <View style={styles.descview}>
            <Text style={styles.desc}>Sign-in to enjoy easier & faster checkout</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6}
            style={styles.googleview}>
            <Image source={imagePath.google_icon} />
            <Text style={styles.googletxt}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            style={styles.facebookview}>
            <Image source={imagePath.facebook_icon} />
            <Text style={styles.facebooktxt}>Continue with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}
            style={styles.emailview}>
            <Text style={styles.emailtxt}>Continue with Email/Phone</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomview}>
          <Text>New to app? <Text style={styles.btmtxt}>Create an account</Text></Text>

        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={styles.conditiontxt}>By continuing, you agree to Geekay's </Text>
          <TouchableOpacity
            activeOpacity={0.7}>
            <Text style={{ color: colors.blue, fontSize: 12 }}> Terms & Conditions </Text>
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 4 }}>
          <Text style={{ fontSize: 12 }}>  and  </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.policytxt}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Login;
