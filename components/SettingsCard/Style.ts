import { StyleSheet } from 'react-native';
import {
	BASE_BLACK,
	BASE_GREY_3,
	BORDER_RADIUS_1,
	DIMENSION_1,
	DIMENSION_2,
	FONT_SIZE_4,
	HEADING_FONT,
} from '../../constants';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: BASE_GREY_3,
		borderRadius: BORDER_RADIUS_1,
		paddingHorizontal: DIMENSION_1,
		paddingVertical: DIMENSION_2,
	},
	textTag: {
		fontFamily: HEADING_FONT,
		fontWeight: '700',
		fontSize: FONT_SIZE_4,
		color: BASE_BLACK,
		marginLeft: DIMENSION_1,
	},
});

export default styles;
