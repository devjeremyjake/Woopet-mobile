import { StyleSheet } from 'react-native';
import {
	BASE_RED,
	DIMENSION_2,
	FONT_SIZE_5,
	TEXT_FONT,
} from '../../../constants';
const styles = StyleSheet.create({
	errorText: {
		color: BASE_RED,
		fontFamily: TEXT_FONT,
		fontWeight: '700',
		fontSize: FONT_SIZE_5,
		marginTop: DIMENSION_2 - 5,
		marginLeft: DIMENSION_2 - 5,
	},
});

export default styles;
