import { View, Text } from 'react-native';
import React, { FC, useCallback, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import styles from './Style';
import OtpInputs from '../../../components/OtpInputs/OtpInputs';
import ButtonComponent from '../../../components/ButtonComponent/ButtonComponent';
import { VerifyScreenSignUpProps } from '../../../navigations/OnboardingNavigator';
import { VerifyNewUserApi } from '../../../apis/auth/Auth';
import { MyNavigationProp } from '../../../types/custom';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import { AuthContextUser } from '../../../context/UserContext';
import authStorage from '../../../auth/Storage';

const SignInOtpVerify: FC<VerifyScreenSignUpProps> = ({ route }) => {
	const { email } = route.params;
	const navigation = useNavigation<MyNavigationProp>();
	const { setUser } = useContext(AuthContextUser);
	const [otpCode, setOtpCode] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const otpValueEntry = useCallback((item: string) => {
		setOtpCode(item);
	}, []);

	const handleVerification = async () => {
		try {
			if (otpCode.length <= 3) {
				console.log('Code Required');
				return false;
			}
			setIsLoading(true);
			const object = JSON.stringify({ otp: otpCode });
			const response = await VerifyNewUserApi(object);
			if (response.status === 200) {
				// sucess message
				console.log(response.data.message);
				const userInfo = await authStorage.getUser();
				setUser(userInfo);
			} else {
				console.log(response.data.message);
			}
		} catch (error) {
			console.log('Error verfying OTP');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<SafeAreaComponent>
			<>
				<View style={styles.container}>
					<Text style={styles.mainHeading}>Let’s Verify</Text>
					<Text style={styles.subheading}>Enter code sent to {email}</Text>
					<View style={styles.verifierContainer}>
						<OtpInputs onPress={otpValueEntry} />
					</View>
					<View style={styles.buttonContainer}>
						<ButtonComponent title="Verify" onPress={handleVerification} />
					</View>
				</View>
				<LoadingComponent isLoading={isLoading} />
			</>
		</SafeAreaComponent>
	);
};

export default SignInOtpVerify;
