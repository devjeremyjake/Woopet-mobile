import { StyleSheet } from 'react-native';
import {
	BASE_BLACK,
	BASE_GREY_2,
	DIMENSION_1,
	DIMENSION_2,
	FONT_SIZE_2,
	FONT_SIZE_4,
	HEADING_BOLD,
	HEADING_FONT,
} from '../../../constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: DIMENSION_1,
	},
	mainHeading: {
		fontFamily: HEADING_BOLD,
		fontWeight: '700',
		fontSize: FONT_SIZE_2 - 6,
		color: BASE_BLACK,
		marginBottom: DIMENSION_2 - 5,
		marginTop: DIMENSION_2,
	},
	subheading: {
		fontFamily: HEADING_FONT,
		fontWeight: '700',
		fontSize: FONT_SIZE_4,
		color: BASE_GREY_2,
		marginBottom: DIMENSION_1,
	},
	verifierContainer: {
		marginHorizontal: DIMENSION_1,
		display: 'flex',
		justifyContent: 'center',
	},
	buttonContainer: {
		marginTop: 'auto',
	},
});

export default styles;
