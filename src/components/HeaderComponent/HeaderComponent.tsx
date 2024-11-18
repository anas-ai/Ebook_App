import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MenuIcon from '../../assets/images/svg/menu';
import LogoIcon from '../../assets/images/svg/logo';
import ProfileIcon from '../../assets/images/svg/ProfileIcon';

const HeaderComponent = (props:any) => {

  const openToDrawer = () => {
    props.navigation.openDrawer(); 
  };

  return (
    <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
    
    <TouchableOpacity onPress={openToDrawer} >

    <MenuIcon />
    </TouchableOpacity>
    <LogoIcon />
    <ProfileIcon />
  </View>
  )
}

export default HeaderComponent