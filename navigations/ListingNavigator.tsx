import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import HomeScreen from '../screens/tabScreens/HomeScreen/HomeScreen';
import routes from './routes';
import ListingDetailScreen from '../screens/tabScreens/ListingDetailScreen/ListingDetailScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type SharedStackParams = {
	HOME_SCREEN: undefined;
	LISTING_DETAILS_SCREEN: {
		id: number;
		src: string;
	};
};

export type ListingDetailScreenProps = {
	navigation: StackNavigationProp<SharedStackParams, 'LISTING_DETAILS_SCREEN'>;
	route: RouteProp<SharedStackParams, 'LISTING_DETAILS_SCREEN'>;
};

const Stack = createSharedElementStackNavigator<SharedStackParams>();

const options = {
	headerBackTitleVisible: false,
	cardStyle: {
		backgroundColor: 'transparent',
	},
	cardStyleInterpolator: ({ current: { progress } }) => {
		const opacity = progress.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		});
		return {
			cardStyle: {
				opacity,
			},
		};
	},
};

const LisitingNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
			<Stack.Screen
				name={routes.LISTING_DETAILS_SCREEN}
				component={ListingDetailScreen}
				options={options}
				sharedElements={(route) => {
					const { item } = route.params;
					return [
						{
							id: `item.${item.id}.photo`,
							animation: 'fade',
							resize: 'auto',
						},
					];
				}}
			/>
		</Stack.Navigator>
	);
};

export default LisitingNavigator;
