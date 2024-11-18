import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {TextHeading} from '../../utils/typography';
import {colors} from '../../styles/colors';
import StatusBarComponent from '../../components/StatusBarComponent/statusBar';
import {Controller, useForm} from 'react-hook-form';
import User from '../../assets/images/svg/User';
import {Button} from '@rneui/themed';
import {PNG_IMG} from '../../constants/images';
import Eye from '../../assets/images/svg/Eye';
import Lock from '../../assets/images/svg/Lock';
import Eyeoff from '../../assets/images/svg/Eyeoff';
import Title from '../../components/TitleComponent/Title';
import {ScreenName} from '../../constants/ScreensNames';
import CustomButton from '../../components/CustumButtonComponent/CustomButton';
import axios from 'axios';
import {useToast} from 'react-native-toast-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosInstance } from '../../utils/api';
import { ApiConfig } from '../../config/ApiConfig';
import useAuth from '../../hooks/useAuth';

const LoginScreen = (props: any) => {
  const{login} = useAuth()
  const toast = useToast();
  const [isPasswordVisible, setIsPasswordVisible] = useState<any>(false);

  interface TokenAndUserProps {
    accessToken: string;
    user: {
      email: string;
      name: string;
    };
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting},
  } = useForm({defaultValues: {email: '', password: ''}});

  const handleSignUP = () =>
    props.navigation.navigate(ScreenName.SIGNUP_SCREEN);

  

  const onSubmit = async (data: any) => {
    
    try {
      await axiosInstance
        .post(
          ApiConfig.POST_LOGIN,
          data,
        )
        .then(async response => {
          if (response.status === 200) {
            const {accessToken, user} = response?.data?.data;
            await login(accessToken)
            // reset()
            
            toast.show('Login successful!', {
              type: 'success',
              placement: 'bottom',
              duration: 3000,
              animationType: 'zoom-in',
            });
            // props.navigation.navigate(ScreenName.GET_STARTED_SCREEN);
          }
        });
    } catch (error: any) {
      console.error('Error during login:', error);
      toast.show('Login failed. Please try again.', {
        type: 'danger',
        placement: 'bottom',
        duration: 3000,
        animationType: 'slide-in',
      });
    }
  };

  const handelForgotPassword = () => {
    props.navigation.navigate(ScreenName.FORGOT_PASSWORD_SCREEN);
  };

  return (
    <SafeAreaView style={globalStyles.globalContainer}>
      <StatusBarComponent backgroundColor={colors.white}  />
      <Title title="Welcome" title2="Back!" />
      <View style={styles.inputContainer}>
        <View
          style={[
            styles.inputWrapper,
            {borderColor: errors.email ? colors.red : '#A8A8A9'},
          ]}>
          <User />
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email address.',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Enter email"
                placeholderTextColor={colors.secondaryTxt}
                keyboardType="email-address"
                style={styles.input}
                maxLength={30}
              />
            )}
          />
        </View>
        {errors.email && (
          <Text style={styles.errorText}>{errors.email?.message}</Text>
        )}
      </View>

      <View style={{paddingTop: 30}}>
        <View
          style={[
            styles.inputWrapper,
            {borderColor: errors.email ? colors.red : '#A8A8A9'},
          ]}>
          <Lock height={24} width={24} />
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'This field is required',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Password"
                placeholderTextColor={colors.secondaryTxt}
                keyboardType="numbers-and-punctuation"
                style={styles.input}
                maxLength={204}
                secureTextEntry={!isPasswordVisible}
              />
            )}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <View>
              {isPasswordVisible ? (
                <Eye />
              ) : (
                <Eyeoff color={colors.secondaryTxt} height={20} width={20} />
              )}
            </View>
          </TouchableOpacity>
        </View>
        {errors?.password && (
          <Text style={styles.errorText}>{errors.password?.message}</Text>
        )}
      </View>

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={handelForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <CustomButton
        onPress={handleSubmit(onSubmit)}
        title="login"
        loading={isSubmitting}
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.loginButton}
        disabled={isSubmitting}
        loginButtonContainer={{marginTop:50}}
      />
      <View style={styles.socialLoginContainer}>
        <TextHeading
          title="- OR Continue with -"
          fontSize={13}
          fontColor={colors.secondaryTxt}
          fontWeight="400"
        />
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image source={PNG_IMG.GOOGLE_PNG} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Image source={PNG_IMG.FACEBOOK_PNG} />
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <TextHeading
            title="Create An Account"
            fontSize={13}
            fontColor={colors.secondaryTxt}
          />
          <TouchableOpacity activeOpacity={0.6} onPress={handleSignUP}>
            <TextHeading
              title="Sign Up"
              fontSize={13}
              fontColor={colors.primary}
              headingStyles={styles.signupText}
              fontWeight="600"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
  },
  inputWrapper: {
    backgroundColor: '#F3F3F3',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: colors.secondaryTxt,
  },
  errorText: {
    color: colors.red,
    paddingTop: 2,
    paddingHorizontal: 6,
  },
  forgotPasswordContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: 13,
  },
  loginButtonContainer: {
    marginTop: 50,
  },

  socialLoginContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    gap: 20,
    padding: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  signupText: {
    textDecorationLine: 'underline',
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    paddingVertical: 14,
  },
});

export default LoginScreen;
