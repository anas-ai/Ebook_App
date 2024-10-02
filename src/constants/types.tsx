import {Control, FieldError} from 'react-hook-form';
import {
  ImageSourcePropType,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {SvgProps} from 'react-native-svg';

type SplashTypes = {
  image: ImageSourcePropType;
  title: string;
  description: string;
};

type HeadingProps = {
  title: string;
  fontColor?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  headingStyles?: TextStyle;
};

type TextBoxProps = {
  control: Control<any>;
  errors?: FieldError;
  name: string;
  startIcon?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  numberOfLines?: number;
  bgColor?: string;
  borderColor?: string;
  endIcon?: React.ReactNode;
  errorMessage: string;
  regexPattern: RegExp;
  rules: object;
};

type SvgImgprops = {
  image: React.FC<SvgProps>;
  xmlns: string;
};

type titleprops = {
  title: string;
  title2: string;
};

type FormDataprops = {
  email: string;
  password: string;
};


type CustomButtonProps ={
  onPress: ()=> void;
  title:string;
  titleStyle:TextStyle,
  buttonStyle:ViewStyle;
  loading:boolean
  disabled:boolean
}
export type {
  SplashTypes,
  HeadingProps,
  TextBoxProps,
  SvgImgprops,
  titleprops,
  FormDataprops,
  CustomButtonProps
};
