import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.6648 18.6316L5.73346 21.881C5.25989 22.1271 4.67646 21.9529 4.41538 21.4874V21.4874C4.33985 21.3432 4.2991 21.1833 4.29639 21.0206V6.62241C4.29639 3.87641 6.17282 2.77802 8.87305 2.77802H15.2163C17.8341 2.77802 19.793 3.80319 19.793 6.43934V21.0206C19.793 21.2803 19.6898 21.5294 19.5061 21.7131C19.3224 21.8968 19.0733 22 18.8135 22C18.6479 21.9974 18.485 21.9566 18.3376 21.881L12.3696 18.6316C12.1497 18.5128 11.8847 18.5128 11.6648 18.6316Z"
			stroke="rgba(251, 114, 76, 1)"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			d="M8.36963 9.32266H15.6648"
			stroke="rgba(251, 114, 76, 1)"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);
export default SVGComponent;
