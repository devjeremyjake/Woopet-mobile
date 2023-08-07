import { StyleSheet } from 'react-native';
import {
	BASE_GREY_2,
	BASE_GREY_3,
	BASE_RED,
	BORDER_RADIUS_1,
	DIMENSION_1,
	DIMENSION_2,
	FONT_SIZE_4,
	FONT_SIZE_6,
	HEADING_FONT,
} from '../../../constants';

const styles = StyleSheet.create({
	container: {
		marginBottom: DIMENSION_2 + 5,
	},
	textInputContainer: {
		backgroundColor: BASE_GREY_3,
		borderRadius: BORDER_RADIUS_1,
		borderWidth: 1,
		borderColor: 'transparent',
	},
	inputContainer: {
		paddingHorizontal: DIMENSION_2,
		paddingVertical: DIMENSION_2,
		borderRadius: BORDER_RADIUS_1,
		color: BASE_GREY_2,
		fontSize: FONT_SIZE_4,
		fontWeight: '700',
		fontFamily: HEADING_FONT,
	},
	passwordRevealIcon: {
		position: 'absolute',
		top: 12,
		right: DIMENSION_2,
	},
	inputRedBorder: {
		borderColor: BASE_RED,
	},
	headingText: {
		color: BASE_GREY_2,
		fontSize: FONT_SIZE_6,
		fontWeight: '500',
		fontFamily: HEADING_FONT,
		marginTop: DIMENSION_2,
		marginLeft: DIMENSION_2,
	},
});

export default styles;
