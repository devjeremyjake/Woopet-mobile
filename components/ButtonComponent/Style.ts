import { StyleSheet } from 'react-native';
import {
	BORDER_RADIUS_1,
	DIMENSION_1,
	FONT_SIZE_4,
	HEADING_FONT,
	WHITE,
} from '../../constants';

const styles = StyleSheet.create({
	container: {
		borderRadius: BORDER_RADIUS_1,
		paddingVertical: DIMENSION_1,
	},
	actionText: {
		fontFamily: HEADING_FONT,
		fontWeight: '700',
		fontSize: FONT_SIZE_4,
		color: WHITE,
		textAlign: 'center',
	},
});

export default styles;
