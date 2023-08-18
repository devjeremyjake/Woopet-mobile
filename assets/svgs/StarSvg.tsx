import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
	<Svg width={10} height={11} viewBox="0 0 10 11" fill="none" {...props}>
		<Path
			d="M7.46609 6.46675C7.35817 6.57133 7.30859 6.72258 7.33317 6.87091L7.70359 8.92091C7.73484 9.09466 7.6615 9.2705 7.51609 9.37092C7.37359 9.47508 7.184 9.48758 7.02859 9.40425L5.18317 8.44175C5.119 8.40758 5.04775 8.38925 4.97484 8.38717H4.86192C4.82275 8.393 4.78442 8.4055 4.74942 8.42466L2.90359 9.39175C2.81234 9.43758 2.709 9.45383 2.60775 9.43758C2.36109 9.39092 2.1965 9.15592 2.23692 8.908L2.60775 6.858C2.63234 6.70842 2.58275 6.55633 2.47484 6.45008L0.970253 4.99175C0.84442 4.86966 0.80067 4.68633 0.85817 4.52091C0.914003 4.35591 1.0565 4.2355 1.22859 4.20841L3.29942 3.908C3.45692 3.89175 3.59525 3.79591 3.66609 3.65425L4.57859 1.78341C4.60025 1.74175 4.62817 1.70341 4.66192 1.67091L4.69942 1.64175C4.719 1.62008 4.7415 1.60216 4.7665 1.58758L4.81192 1.57091L4.88275 1.54175H5.05817C5.21484 1.558 5.35275 1.65175 5.42484 1.79175L6.34942 3.65425C6.41609 3.7905 6.54567 3.88508 6.69525 3.908L8.76609 4.20841C8.94109 4.23341 9.08734 4.35425 9.14525 4.52091C9.19984 4.688 9.15275 4.87133 9.02442 4.99175L7.46609 6.46675Z"
			fill="#FFCB55"
		/>
	</Svg>
);
export default SVGComponent;
