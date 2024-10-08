import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '../screens/Onboarding';
import {StackData} from '../Routes';
import {ScreenName} from '../constants/ScreensNames';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenName.ONBOARDING_SCREEN}>
        {StackData.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item?.name}
            component={item?.component}
            options={{
              headerShown: false,
              gestureEnabled: true,
              animation: 'slide_from_right',
              animationDuration: 500,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
