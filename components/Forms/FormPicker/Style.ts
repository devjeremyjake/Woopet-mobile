import { StyleSheet } from 'react-native';
import {
	BASE_GREY_1,
	BORDER_RADIUS_1,
	DIMENSION_1,
	DIMENSION_2,
	WHITE,
} from '../../../constants';

const styles = StyleSheet.create({
	container: {
		backgroundColor: WHITE,
		borderRadius: BORDER_RADIUS_1,
		flexDirection: 'row',
		padding: DIMENSION_1 - 5,
		marginBottom: DIMENSION_2,
	},
	placeholder: {
		color: BASE_GREY_1,
		flex: 1,
	},
	text: {
		flex: 1,
	},
});

export default styles;
