import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg"
const SortIcon = (props:SvgProps) => (
  <Svg
    {...props}
    width={16}
    height={16}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        fill="#232327"
        d="M11.325 12.049V6.384H9.662v5.665H7.17l3.324 3.224 3.325-3.224h-2.493ZM5.507.727 2.181 3.952h2.493v5.664h1.663V3.952H8.83L5.507.727Zm5.818 11.322V6.384H9.662v5.665H7.17l3.324 3.224 3.325-3.224h-2.493ZM5.507.727 2.181 3.952h2.493v5.664h1.663V3.952H8.83L5.507.727Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SortIcon
