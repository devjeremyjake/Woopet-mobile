import { StyleSheet } from 'react-native';
import {
	DIMENSION_1,
	FONT_SIZE_5,
	HEADING_FONT,
	PRIMARY_COLOR,
	WHITE,
} from '../../../constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentWrapper: {
		flex: 1,
		paddingHorizontal: DIMENSION_1,
		paddingVertical: DIMENSION_1,
		justifyContent: 'space-between',
	},
	signInAction: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: DIMENSION_1,
	},
	questionText: {
		fontFamily: HEADING_FONT,
		fontWeight: '700',
		fontSize: FONT_SIZE_5,
		color: WHITE,
		marginRight: DIMENSION_1 - 10,
	},
	actionText: {
		fontFamily: HEADING_FONT,
		fontWeight: '900',
		fontSize: FONT_SIZE_5,
		color: PRIMARY_COLOR,
	},
	contentPading: {
		marginBottom: DIMENSION_1,
	},
});

export default styles;
