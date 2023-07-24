import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Form, FormField, SubmitButton } from '../../../components/Forms';
import { MyNavigationProp } from '../../../types/custom';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import BackArrow from '../../../assets/svgs/BackArrow';
import styles from './Style';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('email'),
	password: Yup.string().required().label('password'),
});

const SignIn = () => {
	const navigation = useNavigation<MyNavigationProp>();
	return (
		<SafeAreaComponent>
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
					<View>
						<BackArrow />
					</View>
				</TouchableWithoutFeedback>
				{/* content */}
				<Text style={styles.mainHeading}>Let’s continue</Text>
				<Text style={styles.subheading}>Log in to view offers</Text>
				<View>
					<Form
						initialValues={{ email: '', fullname: '', password: '' }}
						onSubmit={() => {}}
						validationSchema={validationSchema}
					>
						<View>
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
		</SafeAreaComponent>
	);
};

export default SignIn;
