import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { Form, FormField, SubmitButton } from '../../../components/Forms';
import { useNavigation } from '@react-navigation/native';
import { MyNavigationProp } from '../../../types/custom';
import SafeAreaComponent from '../../../components/SafeAreaComponent/SafeAreaComponent';
import BackArrow from '../../../assets/svgs/BackArrow';
import styles from './Style';

const validationSchema = Yup.object().shape({
	fullname: Yup.string().required().label('fullname'),
	email: Yup.string().required().email().label('email'),
	password: Yup.string().required().label('password'),
});

const SignUp = () => {
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
				<Text style={styles.mainHeading}>Let’s start here</Text>
				<Text style={styles.subheading}>Fill in your details to begin</Text>
				<View>
					<Form
						initialValues={{ email: '', fullname: '', password: '' }}
						onSubmit={() => {}}
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
		</SafeAreaComponent>
	);
};

export default SignUp;
