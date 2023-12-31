import { StyleSheet } from 'react-native';
import {
	BASE_GREY_2,
	BASE_GREY_3,
	BASE_RED,
	BORDER_RADIUS_1,
	DIMENSION_1,
	DIMENSION_2,
	FONT_SIZE_4,
	HEADING_FONT,
} from '../../../constants';

const styles = StyleSheet.create({
	container: {
		borderRadius: BORDER_RADIUS_1,
		flexDirection: 'row',
		padding: DIMENSION_1 - 5,
	},
	inputContainer: {
		backgroundColor: BASE_GREY_3,
		borderRadius: BORDER_RADIUS_1,
		borderWidth: 1,
		borderColor: 'transparent',
		marginBottom: DIMENSION_2,
	},
	placeholder: {
		color: BASE_GREY_2,
		flex: 1,
	},
	text: {
		flex: 1,
		color: BASE_GREY_2,
		fontSize: FONT_SIZE_4,
		fontWeight: '700',
		fontFamily: HEADING_FONT,
	},
	inputRedBorder: {
		borderColor: BASE_RED,
	},
});

export default styles;
