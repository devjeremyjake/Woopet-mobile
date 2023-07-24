import { Dimensions, StyleSheet } from 'react-native';
import {
	BASE_GREY_1,
	DIMENSION_1,
	DIMENSION_2,
	FONT_SIZE_3,
	HEADING_BOLD,
	WHITE,
} from '../../constants';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		width: width - 40,
	},
	text: {
		fontFamily: HEADING_BOLD,
		fontWeight: '900',
		fontSize: FONT_SIZE_3 + 3,
		color: WHITE,
		textAlign: 'center',
		lineHeight: 35,
	},
	pagination: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		marginBottom: DIMENSION_2,
	},
	outerCover: {
		height: 5,
		width: 40,
		borderRadius: DIMENSION_1 - 5,
		marginHorizontal: DIMENSION_2 - 4,
	},
	defaultStyle: {
		backgroundColor: BASE_GREY_1,
	},
	activeStyle: {
		backgroundColor: WHITE,
	},
});

export default styles;
