import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import Title from '../../components/TitleComponent/Title';
import StatusBarComponent from '../../components/StatusBarComponent/statusBar';
import {Controller, useForm} from 'react-hook-form';
import {colors} from '../../styles/colors';
import User from '../../assets/images/svg/User';
import Lock from '../../assets/images/svg/Lock';
import Eyeoff from '../../assets/images/svg/Eyeoff';
import Eye from '../../assets/images/svg/Eye';
import {TextHeading} from '../../utils/typography';
import {Button} from '@rneui/themed';
import {PNG_IMG} from '../../constants/images';
import {ScreenName} from '../../constants/ScreensNames';
import CustomButton from '../../components/CustumButtonComponent/CustomButton';

const SignUpScreen = (props: any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<any>(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors, isSubmitting},
  } = useForm({defaultValues: {email: '', password: '', confirmpassword: ''}});

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleSignIn = () => {
    props.navigation.navigate(ScreenName.LOGIN_SCREEN);
  };
  return (
    <SafeAreaView style={globalStyles.globalContainer}>
      <StatusBarComponent />
      <Title title="Create an" title2="account" />
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
                maxLength={8}
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

      <View style={{paddingTop: 30}}>
        <View
          style={[
            styles.inputWrapper,
            {borderColor: errors.confirmpassword ? colors.red : '#A8A8A9'},
          ]}>
          <Lock height={24} width={24} />
          <Controller
            control={control}
            name="confirmpassword"
            rules={{
              required: 'This field is required',
              validate: value =>
                value === watch('password') || 'Passwords do not match',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="ConfirmPassword"
                placeholderTextColor={colors.secondaryTxt}
                keyboardType="numbers-and-punctuation"
                style={styles.input}
                maxLength={8}
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
        {errors?.confirmpassword && (
          <Text style={styles.errorText}>
            {errors.confirmpassword?.message}
          </Text>
        )}
      </View>

      <View style={styles.rowContainer}>
        <TextHeading title="By clicking the" fontSize={13} />
        <TouchableOpacity activeOpacity={0.5}>
          <TextHeading
            title="Registers"
            fontSize={13}
            fontColor={colors.secondary}
          />
        </TouchableOpacity>
        <TextHeading title="button, you agree" fontSize={13} />
      </View>
      <TextHeading title="to the public offer" fontSize={13} />
      <CustomButton
        onPress={handleSubmit(onSubmit)}
        title="Create Account"
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.loginButton}
        loading={isSubmitting}
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
            title="I Already Have an Account"
            fontSize={13}
            fontColor={colors.secondaryTxt}
          />
          <TouchableOpacity activeOpacity={0.6} onPress={handleSignIn}>
            <TextHeading
              title="Login"
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

export default SignUpScreen;

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
  buttonTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    paddingVertical: 14,
  },
  socialLoginContainer: {
    alignItems: 'center',
    marginTop: 34,
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
  rowContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    gap: 5,
  },
});
