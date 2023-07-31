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
		paddingTop: DIMENSION_2,
	},
	notificationCotainer: {
		display: 'flex',
		alignItems: 'flex-end',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	profileContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: DIMENSION_2 - 5,
	},
	nameContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: DIMENSION_2 - 2,
	},
	nameTag: {
		fontFamily: HEADING_BOLD,
		fontWeight: '700',
		fontSize: FONT_SIZE_2 - 6,
		color: BASE_BLACK,
		marginRight: DIMENSION_2,
	},
	locationContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: DIMENSION_2,
	},
	locationTag: {
		fontFamily: HEADING_FONT,
		fontWeight: '700',
		fontSize: FONT_SIZE_4,
		color: BASE_GREY_2,
		marginLeft: DIMENSION_2 - 5,
	},
	imageTag: {
		width: 165,
		height: 165,
		borderRadius: 83,
	},
});

export default styles;
