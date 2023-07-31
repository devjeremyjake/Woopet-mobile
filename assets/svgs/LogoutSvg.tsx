import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<Path
			d="M15.016 7.38951V6.45651C15.016 4.42151 13.366 2.77151 11.331 2.77151H6.45597C4.42197 2.77151 2.77197 4.42151 2.77197 6.45651V17.5865C2.77197 19.6215 4.42197 21.2715 6.45597 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545"
			stroke="#c20505"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			d="M21.8096 12.0214H9.76855"
			stroke="#c20505"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			d="M18.8811 9.10632L21.8091 12.0213L18.8811 14.9373"
			stroke="#c20505"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);
export default SVGComponent;
