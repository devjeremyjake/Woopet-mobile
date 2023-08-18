import { StyleSheet } from 'react-native';
import {
	BASE_BLACK,
	DIMENSION_1,
	DIMENSION_2,
	FONT_SIZE_2,
	FONT_SIZE_4,
	HEADING_BOLD,
	TEXT_FONT,
} from '../../constants';

const styles = StyleSheet.create({
	container: {
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
	gap: {
		gap: FONT_SIZE_2 - 8,
	},
});

export default styles;
