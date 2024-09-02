import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen';
import {StackData} from '../navigationData/NavigationData';
import { ScreenName } from '../constants/ScreensNames';

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
            options={{headerShown:false}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
