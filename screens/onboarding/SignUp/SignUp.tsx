import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, FormField, SubmitButton } from '../../../components/Forms';
import { useNavigation } from '@react-navigation/native';
import { MyNavigationProp } from '../../../types/custom';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import BackArrow from '../../../assets/svgs/BackArrow';
import styles from './Style';
import authStorage from '../../../auth/Storage';
import useLocation from '../../../hooks/useLocation/useLocation';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import KeyBoardAvoidView from '../../../components/KeyBoardAvoidView/KeyBoardAvoidView';
import { SignUpUser } from '../../../apis/auth/Auth';
import routes from '../../../navigations/routes';

const validationSchema = Yup.object().shape({
	fullname: Yup.string().required().label('fullname'),
	email: Yup.string().required().email().label('email'),
	password: Yup.string().required().label('password'),
});

const SignUp = () => {
	const navigation = useNavigation<MyNavigationProp>();
	const [isLoading, setIsLoading] = useState(false);
	const { locationCoords, address } = useLocation();
	const handleSubmit = async ({
		fullname,
		email,
		password,
	}: {
		fullname: string;
		email: string;
		password: string;
	}) => {
		setIsLoading(true);
		try {
			const object = JSON.stringify({
				name: fullname,
				email,
				password,
				long: locationCoords?.longitude,
				lat: locationCoords?.latitude,
				city: address?.[0]?.city,
				country: address?.[0]?.country,
			});
			const response = await SignUpUser(object);
			if (response.status === 200) {
				await authStorage.storeToken(response.data.token);
				await authStorage.getToken();
				navigation.navigate(routes.OTP_VERIFY_SCREEN, { email });
			} else {
				console.log('Error', response.data.message);
			}
		} catch (error) {
			console.log('Error signUp');
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<KeyBoardAvoidView>
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

						{/* content */}
						<Text style={styles.mainHeading}>Let’s start here</Text>
						<Text style={styles.subheading}>Fill in your details to begin</Text>
						<View>
							<Form
								initialValues={{ email: '', fullname: '', password: '' }}
								onSubmit={handleSubmit}
								validationSchema={validationSchema}
							>
								<View>
									<FormField
										autoCorrect={false}
										name="fullname"
										placeholder="Enter fullname"
										textContentType="none"
										keyboardType="default"
										isPassword={false}
										fieldName="Fullname"
									/>
									<FormField
										autoCorrect={false}
										name="email"
										placeholder="Enter email addess"
										textContentType="emailAddress"
										keyboardType="email-address"
										isPassword={false}
										fieldName="Email"
									/>
									<FormField
										name="password"
										autoCorrect={false}
										placeholder="Enter password"
										textContentType="password"
										isPassword={true}
										fieldName="Password"
									/>
									<View style={styles.submitButton}>
										<SubmitButton title="Proceed" />
									</View>
								</View>
							</Form>
						</View>
					</View>
					<LoadingComponent isLoading={isLoading} />
				</>
			</SafeAreaComponent>
		</KeyBoardAvoidView>
	);
};

export default SignUp;
