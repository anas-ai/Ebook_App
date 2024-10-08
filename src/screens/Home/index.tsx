import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const { logout } = useAuth();
  const navigation = useNavigation(); // Get the navigation object

  const handleLogout = async () => {
    await logout(navigation); // Pass navigation to logout
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Logout" onPress={handleLogout} /> 
    </View>
  );
};

export default Home;
