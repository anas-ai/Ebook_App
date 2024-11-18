import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const AlarmIcon = (props: SvgProps) => (
  <Svg
    {...props}
    width={16}
    height={16}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M14.667 3.8 11.6 1.2l-.867 1L13.8 4.8l.867-1Zm-9.4-1.533-.867-1L1.333 3.8l.867 1 3.067-2.533Zm3.066 3.066h-1v4l3.134 1.934.533-.8-2.667-1.6V5.333ZM8 2.667c-3.333 0-6 2.666-6 6 0 3.333 2.667 6 6 6s6-2.667 6-6c0-3.334-2.667-6-6-6Zm0 10.666a4.638 4.638 0 0 1-4.667-4.666C3.333 6.067 5.4 4 8 4c2.6 0 4.667 2.067 4.667 4.667 0 2.6-2.067 4.666-4.667 4.666Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default AlarmIcon
