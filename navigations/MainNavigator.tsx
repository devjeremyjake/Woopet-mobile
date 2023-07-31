import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './ButtomNavigator';

type RootStackParamList = {
	fullAccess: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
const MainNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="fullAccess" component={BottomNavigator} />
		</Stack.Navigator>
	);
};

export default MainNavigator;
