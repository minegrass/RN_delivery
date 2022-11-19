import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg

    viewBox="0 0 20 20"
    width={20}
    height={20}
    fill="currentColor"
    {...props}

  >
    <Path
      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
)

export default SvgComponent