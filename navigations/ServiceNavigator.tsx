import { createStackNavigator } from '@react-navigation/stack';
import routes from './routes';
import ServiceScreenEntry from '../screens/tabScreens/ServicesScreen/ServiceScreenEntry';
import ServiceChartScreen from '../screens/tabScreens/ServicesScreen/ServiceChartScreen';
import { useContext } from 'react';
import { AuthContextUser } from '../context/UserContext';
import AddNewService from '../screens/tabScreens/ServicesScreen/AddNewService/AddNewService';

type RootStackParamList = {
	TAB_SERVICE_ENTRY: undefined;
	TAB_SERVICE_CHART: undefined;
	TAB_SERVICE_ADD_NEW: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
const ServiceNavigator = () => {
	const { user } = useContext(AuthContextUser);
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{!user?.isSeller ? (
				<>
					<Stack.Screen
						name={routes.TAB_SERVICE_ENTRY}
						component={ServiceScreenEntry}
					/>
					<Stack.Screen
						name={routes.TAB_SERVICE_ADD_NEW}
						component={AddNewService}
					/>
				</>
			) : (
				<>
					<Stack.Screen
						name={routes.TAB_SERVICE_CHART}
						component={ServiceChartScreen}
					/>
				</>
			)}
		</Stack.Navigator>
	);
};

export default ServiceNavigator;
