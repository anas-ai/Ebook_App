import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#626262"
      fillRule="evenodd"
      d="M2.327 5.638C2 6.28 2 7.12 2 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 17.72 22 16.88 22 15.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311Zm5.239 2.537a1 1 0 0 0-1.132 1.65l3.869 2.654a3 3 0 0 0 3.394 0l3.869-2.654a1 1 0 0 0-1.132-1.65l-3.868 2.654a1 1 0 0 1-1.132 0L7.566 8.175Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
