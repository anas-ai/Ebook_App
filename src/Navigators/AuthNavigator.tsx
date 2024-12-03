import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack, LoginStack} from '../Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenName} from '../constants/ScreensNames';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export const AuthNavigatorDrawer = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenName.ONBOARDING_SCREEN}>
      {AuthStack?.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item?.name}
          component={item?.component}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
};

export const AuthNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width: '80%'},
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'slide',
      }}>
      <Drawer.Screen name="mainauth" component={AuthNavigatorDrawer} />
    </Drawer.Navigator>
  );
};

export default AuthNavigator;
