import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React, { useEffect } from 'react';
import {globalStyles} from '../../styles/globalStyles';
import {PNG_IMG} from '../../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import {TextHeading} from '../../utils/typography';
import {colors} from '../../styles/colors';
import CustomButton from '../../components/CustumButtonComponent/CustomButton';
import {ScreenName} from '../../constants/ScreensNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useToast} from 'react-native-toast-notifications';
import useAuth from '../../hooks/useAuth';
import { ActivityIndicator } from 'react-native';

const GetStartedScreen = (props: any) => {
  // const {loading, setLoading} = useAuth();
  // const checkLoginStatus = async () => {
  //   setLoading(true)
  //   try {
  //     const token = await AsyncStorage.getItem('token');
  //     if (token) {
  //       props.navigation.navigate(ScreenName.HOME_SCREEN);
  //     } else {
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.error('Error checking login status:', error);
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  // if (loading) {
  //   return (
  //     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  //       <ActivityIndicator size="large" color={colors.primary} />
  //     </View>
  //   );
  // }
 
  const handleOnpress = () => {
    props.navigation.navigate(ScreenName.HOME_SCREEN);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={PNG_IMG.GETSTARTED_SCREEN}
        style={{flex: 1, justifyContent: 'center'}}>
        <LinearGradient
          start={{x: 0, y: 0.4}}
          end={{x: 0, y: 0}}
          colors={['rgba(0,0,0,0.3)', 'transparent']}
          style={{flex: 1}}>
          <View style={{height: '60%'}} />
          <View style={[{paddingHorizontal: 20, paddingVertical: 20}]}>
            <View style={{alignItems: 'center'}}>
              <TextHeading
                title="You want Authentic, here you go!"
                fontColor={colors.white}
                fontSize={34}
                fontWeight="600"
                headingStyles={{textAlign: 'center', width: '80%'}}
              />
              <View style={{paddingTop: 10}}>
                <TextHeading
                  title="Find it here, buy it now!"
                  fontColor={colors.white}
                  fontSize={14}
                  fontWeight="400"
                />
              </View>
            </View>

            <CustomButton
              title="Get Started"
              onPress={handleOnpress}
              loading={false}
              disabled={false}
              titleStyle={{fontSize: 24}}
              buttonStyle={{marginHorizontal: 24, paddingVertical: 10}}
              loginButtonContainer={{marginTop: 20}}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default GetStartedScreen;
