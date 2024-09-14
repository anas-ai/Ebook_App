import {View, Text} from 'react-native';
import React from 'react';
import {HeadingProps} from '../constants/types';
import {moderateScale} from 'react-native-size-matters';

export const TextHeading: React.FC<HeadingProps> = ({
  title,
  fontColor,
  fontSize,
  fontWeight,
  headingStyles,
}) => {
  return (
    <Text
      style={{
        color: fontColor,
        fontSize: moderateScale(fontSize || 16),
        fontWeight: fontWeight,
        ...headingStyles,
      }}>
      {title}
    </Text>
  );
};
