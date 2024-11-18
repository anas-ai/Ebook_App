import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginStack } from '../Routes';
import { ScreenName } from '../constants/ScreensNames';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName={ScreenName.ONBOARDING_SCREEN}>
    {LoginStack.map((item, index) => (
      <Stack.Screen
        key={index}
        name={item.name}
        component={item.component}
        options={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'slide_from_right',
          animationDuration: 500,
        }}
      />
    ))}
  </Stack.Navigator>
);

export default AppNavigator;
