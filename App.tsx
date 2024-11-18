import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/Navigators/AppNavigator';
import { ToastProvider } from 'react-native-toast-notifications';
import { colors } from './src/styles/colors';
import AuthProvider from './src/context/AuthContext';
import useAuth from './src/hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/Navigators/AuthNavigator';
import { ActivityIndicator, View } from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const { userToken, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ToastProvider
      placement="bottom"
      duration={3000}
      animationType="zoom-in"
      animationDuration={250}
      successColor={colors.green}
      dangerColor={colors.red}
      warningColor={colors.warning_color}
      normalColor="#000">
      <NavigationContainer>
        {userToken ? <AuthNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </ToastProvider>
  );
};

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
