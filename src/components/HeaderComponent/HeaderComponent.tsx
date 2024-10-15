import { View, Text } from 'react-native'
import React from 'react'
import MenuIcon from '../../assets/images/svg/menu';
import LogoIcon from '../../assets/images/svg/logo';
import ProfileIcon from '../../assets/images/svg/ProfileIcon';

const HeaderComponent = () => {
  return (
    <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
    <MenuIcon />
    <LogoIcon />
    <ProfileIcon />
  </View>
  )
}

export default HeaderComponent