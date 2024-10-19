import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const FilterIconSvg = (props: SvgProps,) => (
  <Svg
    {...props}
    width={16}
    height={16}
    fill="none"
  >
    <Path
      stroke="#232327"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.667 2H1.333l5.334 6.307v4.36L9.333 14V8.307L14.667 2Z"
    />
    <Path fill="#232327" d="M9.333 8H6.667v3.911l2.666 1.422V8Z" />
  </Svg>
)
export default FilterIconSvg
