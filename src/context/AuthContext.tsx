import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScreenName} from '../constants/ScreensNames';
import {useToast} from 'react-native-toast-notifications';
import {NavigationProp} from '@react-navigation/native';

type AuthContextType = {
  userToken: string | null;
  login: (token: string) => Promise<void>;
  logout: (navigation: any) => Promise<void>; 
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading:boolean
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({children}: any) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const toast = useToast();

  const login = async (token: string): Promise<void> => {
    try {
      setLoading(true);
      await AsyncStorage.setItem('userToken', token);
      setUserToken(token);
    } catch (error) {
      console.error('Error saving token:', error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async ({navigation}:any): Promise<void> => {
    try {
      setLoading(true);
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
