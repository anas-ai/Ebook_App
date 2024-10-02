import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/Navigators/AppNavigator';
import ToastProvider from 'react-native-toast-notifications';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ToastProvider>

      <AppNavigator />
    </ToastProvider>
  );
};

export default App;
