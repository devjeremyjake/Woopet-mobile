import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen/WelcomeScreen';
import SignUp from '../screens/onboarding/SignUp/SignUp';
import SignIn from '../screens/onboarding/SignIn/SignIn';
import OtpVerify from '../screens/onboarding/OtpVerify/OtpVerify';
import { RouteProp } from '@react-navigation/native';
import RequestOtp from '../screens/onboarding/RequestOtp/RequestOtp';
import NewPassword from '../screens/onboarding/NewPassword/NewPassword';
import SignInOtpVerify from '../screens/onboarding/SignInOtpVerify/SignInOtpVerify';

type RootStackParamList = {
	WELCOME_SCREEN: undefined;
	SIGN_UP_SCREEN: undefined;
	SIGN_IN_SCREEN: undefined;
	OTP_EMAIL_SCREEN: undefined;
	OTP_VERIFY_SCREEN: { email: string };
	SIGN_IN_OTP_SCREEN: { email: string };
	NEW_PASSWORD_SCREEN: undefined;
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
			<Stack.Screen name={Routes.OTP_EMAIL_SCREEN} component={RequestOtp} />
			<Stack.Screen name={Routes.OTP_VERIFY_SCREEN} component={OtpVerify} />
			<Stack.Screen name={Routes.NEW_PASSWORD_SCREEN} component={NewPassword} />
			<Stack.Screen
				name={Routes.SIGN_IN_OTP_SCREEN}
				component={SignInOtpVerify}
			/>
		</Stack.Navigator>
	);
};

export default OnboardingNavigator;
