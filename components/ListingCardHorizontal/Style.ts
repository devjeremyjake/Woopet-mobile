import { StyleSheet } from 'react-native';
import {
	BASE_BLACK,
	BASE_GREY_1,
	BORDER_RADIUS_1,
	DIMENSION_1,
	DIMENSION_2,
	FONT_SIZE_4,
	FONT_SIZE_6,
	HEADING_FONT,
	TEXT_FONT,
	WHITE,
} from '../../constants';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
	},
	cardImage: {
		width: 179,
		height: 125,
		borderRadius: BORDER_RADIUS_1,
	},
	contentContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 5,
	},
	contentLeft: {
		display: 'flex',
		flexDirection: 'column',
	},
	contentName: {
		fontFamily: HEADING_FONT,
		fontWeight: '500',
		fontSize: FONT_SIZE_4,
		color: BASE_BLACK,
	},
	locationContaniner: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 3,
	},
	locationText: {
		fontFamily: TEXT_FONT,
		fontWeight: '500',
		fontSize: FONT_SIZE_6,
		color: BASE_GREY_1,
		marginLeft: 3,
	},
	contentRight: {
		backgroundColor: BASE_BLACK,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: BORDER_RADIUS_1,
		padding: DIMENSION_2,
	},
	contentRightText: {
		fontFamily: TEXT_FONT,
		fontWeight: '500',
		fontSize: FONT_SIZE_6,
		color: WHITE,
	},
	ratingContainer: {
		position: 'absolute',
		top: DIMENSION_2 - 5,
		right: DIMENSION_2 - 5,
		backgroundColor: 'rgba(229, 229, 234, 0.2)',
		borderRadius: DIMENSION_1 - 5,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 7,
	},
	ratingText: {
		fontFamily: TEXT_FONT,
		fontWeight: '500',
		fontSize: FONT_SIZE_6,
		color: WHITE,
		marginLeft: 3,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0,0,0,0.3)',
		borderRadius: BORDER_RADIUS_1,
	},
});

export default styles;
