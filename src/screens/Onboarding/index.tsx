import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {ScreenName} from '../../constants/ScreensNames';
import {SplashData} from '../../constants/data';
import useAuth from '../../hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../styles/colors';

const OnboardingScreen = (props: any) => {
  const {loading, setLoading} = useAuth();

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        props.navigation.navigate(ScreenName.GET_STARTED_SCREEN);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    checkLoginStatus();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const handleDone = () => {
    props.navigation.navigate(ScreenName.LOGIN_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onSkip={handleDone}
        onDone={handleDone}
        pages={SplashData.map(item => ({
          backgroundColor: '#fff',
          image: (
            <View>
              <Image source={item?.image} style={styles.image} />
            </View>
          ),
          title: item?.title,
          subtitle: item?.description,
        }))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.white
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default OnboardingScreen;
