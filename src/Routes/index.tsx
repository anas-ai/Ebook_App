import { ScreenName } from "../constants/ScreensNames";
import Home from "../screens/Home";
import OnboardingScreen from "../screens/Onboarding";
import LoginScreen from "../screens/SignIn";

export const StackData = [
    {name:ScreenName.ONBOARDING_SCREEN,component:OnboardingScreen},
    {name:ScreenName.HOME_SCREEN,component:Home},
    {name:ScreenName.LOGIN_SCREEN,component:LoginScreen},
    
]