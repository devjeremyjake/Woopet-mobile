import { View, Text } from 'react-native';
import React, { useCallback, useState } from 'react';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import styles from './Style';
import OtpInputs from '../../../components/OtpInputs/OtpInputs';
import ButtonComponent from '../../../components/ButtonComponent/ButtonComponent';

const OtpVerify = () => {
	const [otpCode, setOtpCode] = useState<string>('');
	const otpValueEntry = useCallback((item: string) => {
		setOtpCode(item);
	}, []);
	return (
		<SafeAreaComponent>
			<View style={styles.container}>
				<Text style={styles.mainHeading}>Let’s Verify</Text>
				<Text style={styles.subheading}>Enter code sent to your email</Text>
				<View style={styles.verifierContainer}>
					<OtpInputs onPress={otpValueEntry} />
				</View>
				<View style={styles.buttonContainer}>
					<ButtonComponent title="Verify" onPress={() => {}} />
				</View>
			</View>
		</SafeAreaComponent>
	);
};

export default OtpVerify;
