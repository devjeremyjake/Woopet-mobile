import { StyleSheet } from 'react-native';
import {
	BASE_BLACK,
	BASE_GREY_2,
	BASE_GREY_3,
	BORDER_RADIUS_1,
	DIMENSION_1,
	DIMENSION_2,
	FONT_SIZE_2,
	FONT_SIZE_4,
	FONT_SIZE_5,
	FONT_SIZE_6,
	HEADING_BOLD,
	HEADING_FONT,
	TEXT_FONT,
	WHITE,
} from '../../constants';

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		marginVertical: DIMENSION_1,
	},
	headerContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	mainTitle: {
		fontFamily: HEADING_BOLD,
		fontWeight: '700',
		fontSize: FONT_SIZE_2 - 6,
		color: BASE_BLACK,
	},
	seeMorebtn: {
		fontFamily: TEXT_FONT,
		fontSize: FONT_SIZE_4 - 3,
		color: BASE_BLACK,
		textDecorationLine: 'underline',
	},
});

export default styles;
