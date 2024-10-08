import React, { createContext, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreenName } from '../constants/ScreensNames';
import { useToast } from 'react-native-toast-notifications';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface AuthContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logout: (navigation: any) => Promise<void>; // Accept navigation as an argument
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const toast = useToast();

  const logout = async (navigation: any) => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem('token');
      console.log('Token removed');
      navigation.reset({
        routes: [{ name: ScreenName.LOGIN_SCREEN }],
      });
      toast.show('User logged out successfully', {
        type: 'warning',
        placement: 'bottom',
        animationType: 'zoom-in',
        duration: 3000,
      });
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, setLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
