import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';
import * as Yup from 'yup';
import { Form, FormField, SubmitButton } from '../../../components/Forms';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import BackArrow from '../../../assets/svgs/BackArrow';
import { MyNavigationProp } from '../../../types/custom';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import { RequestOtpApi } from '../../../apis/auth/Auth';
import routes from '../../../navigations/routes';
import authStorage from '../../../auth/Storage';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('email'),
});

const RequestOtp = () => {
	const navigation = useNavigation<MyNavigationProp>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSubmit = async ({ email }: { email: string }) => {
		setIsLoading(true);
		try {
			const response = JSON.stringify({
				email: email,
			});
			const responseApi = await RequestOtpApi(response);
			if (responseApi.status === 200) {
				await authStorage.storeToken(responseApi.data.token);
				await authStorage.getToken();
				console.log(responseApi.data.message);
				navigation.navigate(routes.OTP_VERIFY_SCREEN, { email });
			} else {
				console.log('Error');
			}
		} catch (error) {
			console.log('error requesting password');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<SafeAreaComponent>
			<>
				<View style={styles.container}>
					<View style={styles.backButton}>
						<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
							<View>
								<BackArrow />
							</View>
						</TouchableWithoutFeedback>
					</View>
					<Text style={styles.mainHeading}>Recover Password</Text>
					<Text style={styles.subheading}>provide email to progress</Text>
					<>
						<Form
							initialValues={{ email: '', fullname: '', password: '' }}
							onSubmit={handleSubmit}
							validationSchema={validationSchema}
						>
							<FormField
								autoCorrect={false}
								name="email"
								placeholder="Enter email addess"
								textContentType="emailAddress"
								keyboardType="email-address"
								isPassword={false}
								fieldName="Email"
							/>
							<View style={styles.submitButton}>
								<SubmitButton title="Proceed" />
							</View>
						</Form>
					</>
				</View>
				<LoadingComponent isLoading={isLoading} />
			</>
		</SafeAreaComponent>
	);
};

export default RequestOtp;
