import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen/WelcomeScreen';
import SignUp from '../screens/onboarding/SignUp/SignUp';
import SignIn from '../screens/onboarding/SignIn/SignIn';

type RootStackParamList = {
	WELCOME_SCREEN: undefined;
	SIGN_UP_SCREEN: undefined;
	SIGN_IN_SCREEN: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const OnboardingNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={Routes.WELCOME_SCREEN}
				component={WelcomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={Routes.SIGN_UP_SCREEN}
				component={SignUp}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={Routes.SIGN_IN_SCREEN}
				component={SignIn}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default OnboardingNavigator;
