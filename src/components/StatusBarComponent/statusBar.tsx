import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../styles/colors';

const StatusBarComponent = () => {
  const TRANSITIONS = ['fade', 'slide', 'none'] as const;
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);
  const[hidden,setHidden] = useState(false)
  return (
    <StatusBar
      animated={true}
      backgroundColor={colors.white}
      showHideTransition={statusBarTransition}
      hidden={hidden}
      />
  );
};

export default StatusBarComponent;
