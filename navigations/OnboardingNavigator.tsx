import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen/WelcomeScreen';
import SignUp from '../screens/onboarding/SignUp/SignUp';
import SignIn from '../screens/onboarding/SignIn/SignIn';
import OtpVerify from '../screens/onboarding/OtpVerify/OtpVerify';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
	WELCOME_SCREEN: undefined;
	SIGN_UP_SCREEN: undefined;
	SIGN_IN_SCREEN: undefined;
	OTP_VERIFY_SCREEN: { email: string };
};

type VerifyScreenRouteProp = RouteProp<RootStackParamList, 'OTP_VERIFY_SCREEN'>;
export type VerifyScreenProps = {
	route: VerifyScreenRouteProp;
};

const Stack = createStackNavigator<RootStackParamList>();

const OnboardingNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={Routes.WELCOME_SCREEN} component={WelcomeScreen} />
			<Stack.Screen name={Routes.SIGN_UP_SCREEN} component={SignUp} />
			<Stack.Screen name={Routes.SIGN_IN_SCREEN} component={SignIn} />
			<Stack.Screen name={Routes.OTP_VERIFY_SCREEN} component={OtpVerify} />
		</Stack.Navigator>
	);
};

export default OnboardingNavigator;
