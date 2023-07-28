import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
	<Svg width={38} height={38} viewBox="0 0 28 28" fill="none" {...props}>
		<Path
			d="M4.95831 14.3199L22.4583 14.3199"
			stroke="#2B2B2B"
			strokeWidth={3}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			d="M12.0164 21.3484L4.95808 14.3204L12.0164 7.29126"
			stroke="#2B2B2B"
			strokeWidth={3}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);
export default SVGComponent;
