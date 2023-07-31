import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<Path
			d="M19 8.5L12 15.5L5 8.5"
			stroke="#200E32"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);
export default SVGComponent;
