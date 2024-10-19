import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../styles/colors';

const StatusBarComponent = ({ backgroundColor }: { backgroundColor: string }) => {
  const TRANSITIONS = ['fade', 'slide', 'none'] as const;
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);
  const [hidden, setHidden] = useState(false);

  return (
    <StatusBar
      animated={true}
      backgroundColor={backgroundColor}  // Correctly passing backgroundColor
      showHideTransition={statusBarTransition}
      hidden={hidden}
      barStyle="dark-content"
    />
  );
};

export default StatusBarComponent;
