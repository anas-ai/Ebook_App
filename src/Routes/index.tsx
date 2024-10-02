import { ScreenName } from "../constants/ScreensNames";
import ForgotpasswordScreen from "../screens/Forgotpassword";
import GetStartedScreen from "../screens/GetStarted";
import Home from "../screens/Home";
import OnboardingScreen from "../screens/Onboarding";
import LoginScreen from "../screens/SignIn";
import SignUpScreen from "../screens/SignUp";

export const StackData = [
    {name:ScreenName.ONBOARDING_SCREEN,component:OnboardingScreen},
    {name:ScreenName.HOME_SCREEN,component:Home},
    {name:ScreenName.LOGIN_SCREEN,component:LoginScreen},
    {name:ScreenName.SIGNUP_SCREEN,component:SignUpScreen},
    {name:ScreenName.FORGOT_PASSWORD_SCREEN,component:ForgotpasswordScreen},
    {name:ScreenName.GET_STARTED_SCREEN,component:GetStartedScreen},
    
]