import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BASE_GREY_1, DIMENSION_1, HEADING_FONT } from '../constants';
import routes from './routes';
import HomeSvg from '../assets/svgs/HomeSvg';
import SettingScreen from '../screens/tabScreens/SettingScreen/SettingScreen';
import ProfileSvg from '../assets/svgs/ProfileSvg';
import MomentSvg from '../assets/svgs/MomentSvg';
import MomentScreen from '../screens/tabScreens/MomentScreen/MomentScreen';
import ServicesScreen from '../screens/tabScreens/ServicesScreen/ServicesScreen';
import WorkSvg from '../assets/svgs/WorkSvg';
import LisitingNavigator from './ListingNavigator';

const Tab = createBottomTabNavigator();

const HomeTabIcon = ({ focused }: { focused: boolean }) => (
	<HomeSvg color={focused ? '#000' : '#AEAEB2'} />
);
const ProfileTabIcon = ({ focused }: { focused: boolean }) => (
	<ProfileSvg color={focused ? '#000' : '#AEAEB2'} />
);
const MomentTabIcon = ({ focused }: { focused: boolean }) => (
	<MomentSvg color={focused ? '#000' : '#AEAEB2'} />
);
const ServicesTabIcon = ({ focused }: { focused: boolean }) => (
	<WorkSvg color={focused ? '#000' : '#AEAEB2'} />
);

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
			component={LisitingNavigator}
			options={{
				tabBarIcon: HomeTabIcon,
				tabBarLabel: 'Home',
			}}
		/>
		<Tab.Screen
			name={routes.TAB_MOMENT_SCREEN}
			component={MomentScreen}
			options={{
				tabBarIcon: MomentTabIcon,
				tabBarLabel: 'Moment',
			}}
		/>
		<Tab.Screen
			name={routes.TAB_SERVICES_SCREEN}
			component={ServicesScreen}
			options={{
				tabBarIcon: ServicesTabIcon,
				tabBarLabel: 'Services',
			}}
		/>
		<Tab.Screen
			name={routes.TAB_SETTING_SCREEN}
			component={SettingScreen}
			options={{
				tabBarIcon: ProfileTabIcon,
				tabBarLabel: 'Profile',
			}}
		/>
	</Tab.Navigator>
);
export default BottomNavigator;
