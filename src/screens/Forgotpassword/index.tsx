import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/globalStyles';
import Title from '../../components/TitleComponent/Title';
import {Controller, useForm} from 'react-hook-form';
import {colors} from '../../styles/colors';
import Email from '../../assets/images/svg/Email';
import {TextHeading} from '../../utils/typography';
import CustomButton from '../../components/CustumButtonComponent/CustomButton';

const ForgotpasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm({defaultValues: {email: ''}});

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <SafeAreaView style={globalStyles.globalContainer}>
      <Title title="Forgot" title2="password?" />
      <View style={styles.inputContainer}>
        <View
          style={[
            styles.inputWrapper,
            {borderColor: errors.email ? colors.red : '#A8A8A9'},
          ]}>
          <Email />
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
                placeholder="Enter your email address"
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
      <View
        style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
        <TextHeading title="*" fontColor={colors.primary} fontSize={14} />
        <TextHeading
          title=" We will send you a message to set or reset your new password"
          fontSize={14}
          fontColor={colors.black}
        />
      </View>
      <CustomButton
        onPress={handleSubmit(onSubmit)}
        title="Submit"
        titleStyle={styles.buttonTitle}
        disabled={isSubmitting}
        buttonStyle={styles.loginButton}
        loading={isSubmitting}
        loginButtonContainer={{marginTop:50}}
      />
    </SafeAreaView>
  );
};

export default ForgotpasswordScreen;

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
