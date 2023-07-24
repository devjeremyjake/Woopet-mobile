import { TextInput, Text, View, TouchableWithoutFeedback } from 'react-native';
import React, { FC, useState } from 'react';
import { useFormikContext } from 'formik';
import styles from './Style';
import { BASE_GREY_2 } from '../../../constants';
import EyeOpenSvg from '../../../assets/svgs/EyeOpenSvg';
import EyeCloseSvg from '../../../assets/svgs/EyeCloseSvg';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface FormFieldProp {
	name: string;
	autoCorrect: boolean;
	placeholder: string;
	textContentType?: 'none' | 'username' | 'emailAddress' | 'password';
	secureTextEntry?: boolean;
	isPassword: boolean;
	keyboardType?: 'default' | 'email-address' | 'numeric';
	fieldName: string;
}

type formikContextProps = {
	[key: string]: string;
};

const InputField: FC<FormFieldProp> = ({
	name,
	isPassword,
	fieldName,
	...otherProps
}) => {
	const {
		setFieldTouched,
		setFieldValue,
		errors,
		touched,
		values,
		handleBlur,
	} = useFormikContext<formikContextProps>();

	const errorBorder =
		touched?.[name] && errors?.[name] && styles.inputRedBorder;

	const [securePassword, setSecurePassword] = useState(true);
	const notSecured = false;
	const secureFieldValue = isPassword ? securePassword : notSecured;
	return (
		<View style={styles.container}>
			<View style={[styles.textInputContainer, errorBorder as any]}>
				<Text style={styles.headingText}>{fieldName}</Text>
				<View>
					<TextInput
						style={[styles.inputContainer]}
						onBlur={() => {
							setFieldTouched(name);
							handleBlur(name);
						}}
						onChangeText={(text) => setFieldValue(name, text)}
						value={values[name]}
						placeholderTextColor={BASE_GREY_2}
						secureTextEntry={secureFieldValue}
						autoCapitalize="none"
						{...otherProps}
						testID="my-input-field"
					/>
					{isPassword ? (
						<TouchableWithoutFeedback
							onPress={() => setSecurePassword(!securePassword)}
						>
							<View
								testID="secure-password-icon"
								style={styles.passwordRevealIcon}
							>
								{securePassword ? <EyeOpenSvg /> : <EyeCloseSvg />}
							</View>
						</TouchableWithoutFeedback>
					) : null}
				</View>
			</View>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</View>
	);
};

export default InputField;
