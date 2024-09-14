import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/globalStyles';
import {TextBoxProps} from '../../constants/types';

export const TextBox: React.FC<TextBoxProps> = ({
  control,
  errors,
  name,
  startIcon,
  placeholder,
  required = false,
  helperText,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 1,
  bgColor = '#F3F3F3',
  borderColor = '#A8A8A9',
  endIcon,
  regexPattern,
  errorMessage
}) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={{
          required: required ? 'This field is required' : false, // Validation for required fields
          pattern: regexPattern ? {value: regexPattern, message: errorMessage || 'Invalid format'} : undefined, // Validation with regex
        }}

        render={({field: {onChange, onBlur, value}}) => (
          <View
            style={[
              Styles.inputContainerStyle,
              {
                borderColor: errors ? 'red' : borderColor,
                backgroundColor: bgColor,
              },
            ]}>
            {startIcon && startIcon}
            <TextInput
              keyboardType={keyboardType}
              placeholder={placeholder}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={[
                Styles.textInputStyle,
              ]}
              placeholderTextColor={colors.black}
              multiline={multiline} // Set multiline
              numberOfLines={numberOfLines} // Set the number of lines for multiline
              
            />
            {endIcon && endIcon}
          </View>
        )}
      />
      {errors && (
        <Text style={[globalStyles.errorMessage, {paddingLeft: 12}]}>
          {helperText ? helperText : 'This field is required'}
        </Text>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical:6,
    columnGap: 5,
  },

  textInputStyle: {
    flex: 1,
    fontSize: 13,
    color: colors.TextInput_color,
  },


});
