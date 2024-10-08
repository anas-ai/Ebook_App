import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/Navigators/AppNavigator';
import {ToastProvider} from 'react-native-toast-notifications';
import {colors} from './src/styles/colors';
import AuthProvider from './src/context/AuthContext';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AuthProvider>

    <ToastProvider
      placement="bottom"
      duration={3000}
      animationType="zoom-in"
      animationDuration={250}
      successColor={colors.green}
      dangerColor={colors.red}
      warningColor={colors.warning_color}>
      <AppNavigator />
    </ToastProvider>
    </AuthProvider>

  );
};

export default App;
