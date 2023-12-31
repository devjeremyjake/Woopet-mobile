import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Form, FormField, SubmitButton } from '../../../components/Forms';
import { MyNavigationProp } from '../../../types/custom';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import BackArrow from '../../../assets/svgs/BackArrow';
import styles from './Style';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import KeyBoardAvoidView from '../../../components/KeyBoardAvoidView/KeyBoardAvoidView';
import routes from '../../../navigations/routes';
import { SignInUser } from '../../../apis/auth/Auth';
import authStorage from '../../../auth/Storage';
import { AuthContextUser } from '../../../context/UserContext';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('email'),
	password: Yup.string().required().label('password'),
});

const SignIn = () => {
	const navigation = useNavigation<MyNavigationProp>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { setUser } = useContext(AuthContextUser);

	const handleSubmit = async ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) => {
		setIsLoading(true);
		try {
			const object = JSON.stringify({
				email,
				password,
			});
			const responseObject = await SignInUser(object);

			if (responseObject.status === 200) {
				await authStorage.storeToken(responseObject.data.token);
				const userInfo = await authStorage.getUser();
				setUser(userInfo);
			} else {
				console.log(responseObject.data.message);
			}
		} catch (error) {
			console.log('Error Siging In');
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
						<Text style={styles.mainHeading}>Let’s continue</Text>
						<Text style={styles.subheading}>Log in to view offers</Text>
						<>
							<Form
								initialValues={{ email: '', fullname: '', password: '' }}
								onSubmit={handleSubmit}
								validationSchema={validationSchema}
							>
								<>
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

									<TouchableWithoutFeedback
										onPress={() => navigation.navigate(routes.OTP_EMAIL_SCREEN)}
									>
										<View>
											<Text style={styles.forPasswordText}>
												Forgot Password?
											</Text>
										</View>
									</TouchableWithoutFeedback>

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
		</KeyBoardAvoidView>
	);
};

export default SignIn;
