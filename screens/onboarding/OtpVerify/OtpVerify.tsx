import { View, Text } from 'react-native';
import React, { FC, useCallback, useState } from 'react';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import styles from './Style';
import OtpInputs from '../../../components/OtpInputs/OtpInputs';
import ButtonComponent from '../../../components/ButtonComponent/ButtonComponent';
import { VerifyScreenProps } from '../../../navigations/OnboardingNavigator';
import { VerifyUser } from '../../../apis/auth/Auth';

const OtpVerify: FC<VerifyScreenProps> = ({ route }) => {
	const { email } = route.params;
	const [otpCode, setOtpCode] = useState<string>('');
	console.log(otpCode);
	const otpValueEntry = useCallback((item: string) => {
		setOtpCode(item);
	}, []);

	const handleVerification = async () => {
		if (otpCode.length <= 3) {
			console.log('Code Required');
			return false;
		}
		const object = JSON.stringify({ otp: otpCode });
		const response = await VerifyUser(object);
		console.log('Response', response.data);
	};

	return (
		<SafeAreaComponent>
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
		</SafeAreaComponent>
	);
};

export default OtpVerify;
