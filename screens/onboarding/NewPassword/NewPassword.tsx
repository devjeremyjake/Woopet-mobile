import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, FormField, SubmitButton } from '../../../components/Forms';
import { useNavigation } from '@react-navigation/native';
import { MyNavigationProp } from '../../../types/custom';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import BackArrow from '../../../assets/svgs/BackArrow';
import styles from './Style';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import { SubmitNewPasswordApi } from '../../../apis/auth/Auth';
import authStorage from '../../../auth/Storage';
import routes from '../../../navigations/routes';

const validationSchema = Yup.object().shape({
	password: Yup.string().required('Password is required'),
	passwordConfirmation: Yup.string().oneOf(
		[Yup.ref('password')],
		'Passwords must match'
	),
});
const NewPassword = () => {
	const navigation = useNavigation<MyNavigationProp>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSubmit = async ({ password }: { password: string }) => {
		try {
			const object = JSON.stringify({
				password,
			});
			setIsLoading(true);
			const response = await SubmitNewPasswordApi(object);
			if (response.status === 200) {
				authStorage.removeToken();
				navigation.navigate(routes.SIGN_IN_SCREEN);
			}
		} catch (error) {
			console.log('Error submitting password');
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
					<Text style={styles.mainHeading}>New Password</Text>
					<Text style={styles.subheading}>Fill in your new password</Text>
					<>
						<Form
							initialValues={{
								email: '',
								fullname: '',
								password: '',
								passwordConfirmation: '',
							}}
							onSubmit={handleSubmit}
							validationSchema={validationSchema}
						>
							<>
								<FormField
									name="password"
									autoCorrect={false}
									placeholder="New Password"
									textContentType="password"
									isPassword={true}
									fieldName="Password"
								/>
								<FormField
									name="passwordConfirmation"
									autoCorrect={false}
									placeholder="Confirm Password"
									textContentType="password"
									isPassword={true}
									fieldName="Confirm password"
								/>
								<View style={styles.submitButton}>
									<SubmitButton title="Proceed" />
								</View>
							</>
						</Form>
					</>
				</View>
				<LoadingComponent isLoading={isLoading} />
			</>
		</SafeAreaComponent>
	);
};

export default NewPassword;
