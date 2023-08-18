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
	HEADING_BOLD,
	HEADING_FONT,
	TEXT_FONT,
} from '../../../constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: DIMENSION_1,
		paddingTop: DIMENSION_2,
	},
	headingContainer: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: DIMENSION_1,
	},
	headingMainText: {
		fontFamily: HEADING_BOLD,
		fontWeight: '700',
		fontSize: FONT_SIZE_2 - 6,
		color: BASE_BLACK,
		marginBottom: DIMENSION_2 - 9,
	},
	headingSubText: {
		fontFamily: HEADING_FONT,
		fontWeight: '700',
		fontSize: FONT_SIZE_4,
		color: BASE_GREY_2,
	},
	locationWrapper: {
		backgroundColor: BASE_GREY_3,
		borderRadius: BORDER_RADIUS_1,
		borderWidth: 0.5,
		borderColor: BASE_GREY_3,
		paddingHorizontal: DIMENSION_2,
		paddingVertical: DIMENSION_1 - 5,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
	},
	locationText: {
		fontFamily: TEXT_FONT,
		fontWeight: '700',
		fontSize: FONT_SIZE_4,
		color: BASE_GREY_2,
		marginLeft: DIMENSION_2 - 5,
	},
});

export default styles;
