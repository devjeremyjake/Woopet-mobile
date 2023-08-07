import { StyleSheet } from 'react-native';
import {
	BASE_GREY_3,
	BASE_RED,
	BORDER_RADIUS_1,
	DIMENSION_2,
} from '../../../constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		marginVertical: DIMENSION_2,
		flexDirection: 'row',
	},
	containerCamera: {
		backgroundColor: BASE_GREY_3,
		padding: DIMENSION_2,
		borderRadius: BORDER_RADIUS_1,
		borderWidth: 1,
		borderColor: 'transparent',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRedBorder: {
		borderColor: BASE_RED,
	},
	imageContainer: {
		width: 150,
		height: 100,
		marginLeft: 20,
	},
});

export default styles;
