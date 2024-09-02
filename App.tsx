import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/Navigators/AppNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  },[]);
  return (
    <AppNavigator/>
  );
};

export default App;
