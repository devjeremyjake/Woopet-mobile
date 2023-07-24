import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputField from './InputField';
import { useFormikContext, formikMockValue } from '../../../__mocks__/formik';

jest.mock('formik');

describe('<InputField />', () => {
	const setUpFormField = () =>
		render(
			<InputField
				name="email"
				placeholder="Enter Email"
				textContentType="emailAddress"
				autoCorrect={false}
				isPassword={false}
				fieldName="Email"
			/>
		);
	it('should render with correct props and vaues', () => {
		const { getByPlaceholderText } = setUpFormField();
		const inputElement = getByPlaceholderText('Enter Email');
		expect(inputElement).toBeOnTheScreen();
	});
	it('updates values of FormField component on change', () => {
		useFormikContext.mockReturnValue({
			...formikMockValue,
			values: { email: 'Hello@gmail.com' },
		});
		const { getByTestId } = setUpFormField();
		const inputElement = getByTestId('my-input-field');
		expect(inputElement.props.value).toBe('Hello@gmail.com');
	});
	it('should renders FormField component with secure password', () => {
		const props = {
			name: 'password',
			isPassword: true,
			placeholder: 'Enter Password',
			value: 'password',
			autoCapitalize: 'none',
		};
		const { getByTestId } = render(<InputField {...(props as any)} />);
		const inputField = getByTestId('my-input-field');
		const securePasswordIcon = getByTestId('secure-password-icon');
		fireEvent.press(securePasswordIcon);
		expect(inputField.props.secureTextEntry).toBe(false);
	});
});
