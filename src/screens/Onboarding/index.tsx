import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { ScreenName } from '../../constants/ScreensNames';
import { SplashData } from '../../constants/data';


const OnboardingScreen = (props: any) => {
  const handleDone = () => {
    props.navigation.navigate(ScreenName.LOGIN_SCREEN);
  };

  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        onSkip={handleDone}
        onDone={handleDone}
        pages={SplashData.map(item => ({
          backgroundColor: '#fff',
          image: (
            <View >
              <Image source={item?.image}/>
            </View>
          ),
          title:item?.title ,
          subtitle: item?.description,
        }))}
       
      />
    </View>
  );
};



export default OnboardingScreen;
