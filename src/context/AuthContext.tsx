import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScreenName} from '../constants/ScreensNames';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';

type AuthContextType = {
  userToken: string | null;
  login: (accessToken: string) => Promise<void>;
  logout: (navigation: any) => Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({children}: any) => {
  const toast = useToast()
  const [userToken, setUserToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const login = async (accessToken: string): Promise<void> => {
    try {
      setLoading(true);
      await AsyncStorage.setItem('userToken', accessToken);
      setUserToken(accessToken);
      toast.show('Token saved successfully!', {
        type: 'success',
        placement: 'top', // Can be 'top', 'center', or 'bottom'
        duration: 3000, // Duration in milliseconds
        animationType: 'zoom-in',
      });
    } catch (error) {
      console.error('Error saving token:', error);
      toast.show('Error saving token. Please try again.', {
        type: 'danger',
        placement: 'top',
        duration: 3000,
        animationType: 'slide-in',
      });
    } finally {
      setLoading(false);
    }
  };

  const logout = async ({navigation}: any): Promise<void> => {
    try {
      setLoading(true);
      setUserToken(null)
      await AsyncStorage.removeItem('userToken');
      navigation.navigate(ScreenName.LOGIN_SCREEN);
      toast.show('Logged out successfully', {type: 'warning'});
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkLoginState = async (): Promise<void> => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      setUserToken(token);
    } catch (error) {
      console.error('Error fetching token:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLoginState();
  }, []);

  return (
    <AuthContext.Provider
      value={{userToken, login, logout, loading, setLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
