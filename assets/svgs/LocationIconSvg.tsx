import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
	<Svg width={21} height={21} viewBox="0 0 21 21" fill="none" {...props}>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.4167 7.9269C12.4167 6.77584 11.484 5.84314 10.3338 5.84314C9.1827 5.84314 8.25 6.77584 8.25 7.9269C8.25 9.07711 9.1827 10.0098 10.3338 10.0098C11.484 10.0098 12.4167 9.07711 12.4167 7.9269Z"
			stroke="#A1A1A1"
			strokeWidth={1.3}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10.333 16.6765C9.33424 16.6765 4.08337 12.4252 4.08337 7.97926C4.08337 4.49871 6.88096 1.67651 10.333 1.67651C13.785 1.67651 16.5834 4.49871 16.5834 7.97926C16.5834 12.4252 11.3317 16.6765 10.333 16.6765Z"
			stroke="#A1A1A1"
			strokeWidth={1.3}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);
export default SVGComponent;
