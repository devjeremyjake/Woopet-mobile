import { DefaultTheme } from '@react-navigation/native';
import { PRIMARY_COLOR, WHITE } from '../constants';

export default {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: PRIMARY_COLOR,
		background: WHITE,
	},
};
