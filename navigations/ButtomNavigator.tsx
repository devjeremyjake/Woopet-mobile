import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BASE_GREY_1, DIMENSION_1, HEADING_FONT } from '../constants';
import routes from './routes';
import HomeScreen from '../screens/tabScreens/HomeScreen/HomeScreen';
import SettingScreen from '../screens/tabScreens/SettingScreen/SettingScreen';
import MomentScreen from '../screens/tabScreens/MomentScreen/MomentScreen';
import ServicesScreen from '../screens/tabScreens/ServicesScreen/ServicesScreen';
import {
	HomeIcon,
	MomentIcon,
	ProfileIcon,
	ServicesIcon,
} from '../components/TabIcons';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
	<Tab.Navigator
		initialRouteName={routes.TAB_HOME_SCREEN}
		screenOptions={{
			tabBarShowLabel: true,
			headerShown: false,
			tabBarInactiveTintColor: BASE_GREY_1,
			tabBarActiveTintColor: '#000',
			tabBarStyle: {
				backgroundColor: 'transparent',
				borderTopColor: 'transparent',
				paddingVertical: DIMENSION_1,
				height: DIMENSION_1 * 5,
			},
			tabBarLabelStyle: {
				fontFamily: HEADING_FONT,
				fontSize: 10,
				fontWeight: '700',
			},
		}}
	>
		<Tab.Screen
			name={routes.TAB_HOME_SCREEN}
			component={HomeScreen}
			options={{
				tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
				tabBarLabel: 'Home',
			}}
		/>
		<Tab.Screen
			name={routes.TAB_MOMENT_SCREEN}
			component={MomentScreen}
			options={{
				tabBarIcon: ({ focused }) => <MomentIcon focused={focused} />,
				tabBarLabel: 'Moment',
			}}
		/>
		<Tab.Screen
			name={routes.TAB_SERVICES_SCREEN}
			component={ServicesScreen}
			options={{
				tabBarIcon: ({ focused }) => <ServicesIcon focused={focused} />,
				tabBarLabel: 'Services',
			}}
		/>
		<Tab.Screen
			name={routes.TAB_SETTING_SCREEN}
			component={SettingScreen}
			options={{
				tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
				tabBarLabel: 'Profile',
			}}
		/>
	</Tab.Navigator>
);
export default BottomNavigator;
