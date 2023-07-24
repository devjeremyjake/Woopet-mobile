import { StyleSheet, Dimensions } from 'react-native';

const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0,0,0,0.7)',
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		height: DEVICE_HEIGHT,
		width: DEVICE_WIDTH,
	},
	spinnerContainer: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default styles;
