import * as React from "react";
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const MenuIcon = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="#F2F2F2" rx={16} />
    <G clipPath="url(#a)">
      <Path
        fill="#323232"
        d="M25 15.01 7 15v2h18v-1.99ZM7 20h12v2H7v-2Zm18-10H7v2.01L25 12v-2Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={24} height={24} x={4} y={4} fill="#fff" rx={12} />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MenuIcon;
