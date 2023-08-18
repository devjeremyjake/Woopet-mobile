import { Dimensions, StyleSheet } from 'react-native';
import {
	BASE_BLACK,
	DIMENSION_1,
	DIMENSION_2,
	DIMENSION_3,
	FONT_SIZE_2,
	FONT_SIZE_4,
	HEADING_BOLD,
	TEXT_FONT,
	WHITE,
} from '../../../constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: WHITE,
	},
	imageStyle: {
		width,
		height: width,
	},
	backBtn: {
		backgroundColor: 'rgba(229, 229, 234, 0.5)',
		borderRadius: DIMENSION_3 / 2,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 7,
		width: DIMENSION_3,
		height: DIMENSION_3,
		marginLeft: DIMENSION_1,
		position: 'absolute',
		top: DIMENSION_1 * 2,
		left: DIMENSION_1,
	},
});

export default styles;
