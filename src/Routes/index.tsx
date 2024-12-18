import {ScreenName} from '../constants/ScreensNames';
import ForgotpasswordScreen from '../screens/Forgotpassword';
import GetStartedScreen from '../screens/GetStarted';
import Home from '../screens/Home';
import OnboardingScreen from '../screens/Onboarding';
import ProductDetail from '../screens/ProductDetailScreen/ProductDetail';
import LoginScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';

export const LoginStack = [
  {name: ScreenName.ONBOARDING_SCREEN, component: OnboardingScreen},
  {name: ScreenName.LOGIN_SCREEN, component: LoginScreen},
  {name: ScreenName.SIGNUP_SCREEN, component: SignUpScreen},
  {name: ScreenName.FORGOT_PASSWORD_SCREEN, component: ForgotpasswordScreen},
];


export const AuthStack = [
  {name: ScreenName.GET_STARTED_SCREEN, component: GetStartedScreen},
  {name: ScreenName.HOME_SCREEN, component: Home},
  {name: ScreenName.PRODUCT_DETAILS_SCREEN, component:ProductDetail},
];

