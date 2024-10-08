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
  loading = false,
  disabled = false,
  loginButtonContainer
}) => {
  return (
    <View style={loginButtonContainer }>
      <Button
        onPress={onPress}
        title={title}
        titleStyle={[styles.buttonTitle,titleStyle]}
        buttonStyle={[styles.loginButton,buttonStyle]}
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
  buttonTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    paddingVertical: 10,
  },
});

export default CustomButton;
