import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const User = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24" // Define the viewBox to control scaling
    fill="none"
    {...props}>
    <Path
      fill="#626262"
      d="M9 14a5 5 0 0 0-5 5 3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 5 5 0 0 0-5-5H9ZM12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
    />
  </Svg>
);

export default User;
