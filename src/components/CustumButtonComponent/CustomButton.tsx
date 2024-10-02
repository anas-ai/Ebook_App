import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import {CustomButtonProps} from '../../constants/types';
import {colors} from '../../styles/colors';

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  titleStyle,
  buttonStyle,
  loading,
  disabled
}) => {
  return (
    <View style={styles.loginButtonContainer}>
      <Button
        onPress={onPress}
        title={title}
        titleStyle={titleStyle}
        buttonStyle={buttonStyle}
        loading={loading}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonContainer: {
    marginTop: 50,
  },
});

export default CustomButton;
