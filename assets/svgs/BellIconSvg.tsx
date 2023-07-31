import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
	<Svg width={44} height={44} viewBox="0 0 44 44" fill="none" {...props}>
		<Rect width={44} height={44} rx={20} fill="#F0F0F0" />
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M27.5892 19.3302C27.5892 20.3768 27.8658 20.9937 28.4746 21.7046C28.9359 22.2283 29.0833 22.9006 29.0833 23.63C29.0833 24.3585 28.844 25.0501 28.3644 25.6116C27.7366 26.2847 26.8513 26.7144 25.9477 26.7891C24.6383 26.9007 23.328 26.9947 22.0004 26.9947C20.6719 26.9947 19.3625 26.9385 18.0531 26.7891C17.1487 26.7144 16.2633 26.2847 15.6364 25.6116C15.1568 25.0501 14.9167 24.3585 14.9167 23.63C14.9167 22.9006 15.0649 22.2283 15.5254 21.7046C16.1532 20.9937 16.4116 20.3768 16.4116 19.3302V18.9752C16.4116 17.5736 16.7611 16.6571 17.4808 15.7598C18.5509 14.4514 20.2661 13.6666 21.9631 13.6666H22.0377C23.7711 13.6666 25.5419 14.4891 26.5937 15.8538C27.2762 16.7326 27.5892 17.6105 27.5892 18.9752V19.3302ZM19.5614 28.7173C19.5614 28.2977 19.9465 28.1055 20.3026 28.0232C20.7192 27.9351 23.2577 27.9351 23.6743 28.0232C24.0304 28.1055 24.4156 28.2977 24.4156 28.7173C24.3949 29.1169 24.1605 29.471 23.8366 29.696C23.4167 30.0233 22.9239 30.2306 22.4088 30.3053C22.1239 30.3422 21.8439 30.3431 21.569 30.3053C21.053 30.2306 20.5602 30.0233 20.1411 29.6951C19.8165 29.471 19.5821 29.1169 19.5614 28.7173Z"
			fill="#2B2B2B"
		/>
	</Svg>
);
export default SVGComponent;
