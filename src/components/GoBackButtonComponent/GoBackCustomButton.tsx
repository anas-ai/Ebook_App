import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationProp} from '@react-navigation/native';

interface GoBackCustomButtonProps {
  navigation: NavigationProp<any>; // Update 'any' with your screen type
}

const GoBackCustomButton = ({navigation}: GoBackCustomButtonProps) => {
  return (
    <View >
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: colors.bgGray,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="arrow-back" size={30} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GoBackCustomButton;
