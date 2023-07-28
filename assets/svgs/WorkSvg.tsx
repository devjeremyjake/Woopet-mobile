import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => {
	const { color } = props;
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				d="M2.8042 15.477C2.8042 15.477 2.9462 17.215 2.9792 17.763C3.0232 18.498 3.3072 19.319 3.7812 19.889C4.4502 20.697 5.2382 20.982 6.2902 20.984C7.5272 20.986 16.5222 20.986 17.7592 20.984C18.8112 20.982 19.5992 20.697 20.2682 19.889C20.7422 19.319 21.0262 18.498 21.0712 17.763C21.1032 17.215 21.2452 15.477 21.2452 15.477"
				stroke={color}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M8.49609 5.32949V4.95849C8.49609 3.73849 9.48409 2.75049 10.7041 2.75049H13.2861C14.5051 2.75049 15.4941 3.73849 15.4941 4.95849L15.4951 5.32949"
				stroke={color}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M11.9951 16.6782V15.3842"
				stroke={color}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.75 8.38909V11.8561C4.668 13.1211 6.966 14.0071 9.488 14.3581C9.79 13.2571 10.783 12.4501 11.99 12.4501C13.178 12.4501 14.191 13.2571 14.473 14.3681C17.005 14.0171 19.312 13.1311 21.24 11.8561V8.38909C21.24 6.69509 19.877 5.33109 18.183 5.33109H5.817C4.123 5.33109 2.75 6.69509 2.75 8.38909Z"
				stroke={color}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};
export default SVGComponent;
